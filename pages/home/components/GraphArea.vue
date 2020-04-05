<template>
  <div class="container">
    <div class="row justify-content-center" style="display:none">
      <div class="form-check form-check-inline">
        <input
          type="radio"
          id="from_beg"
          value="all_data"
          v-model="starting_at"
          @click="changeStartPoint($event)"
        />
        <label class="form-check-label" for="from_beg">All data</label>
      </div>
      <div class="form-check form-check-inline">
        <input
          type="radio"
          id="from_d_zero"
          value="day_zero"
          v-model="starting_at"
          @click="changeStartPoint($event)"
        />
        <label class="form-check-label" for="from_d_zero">Day Zero</label>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <graph-holder :title="$t('graph_cases_confirmed')">
          <bar :chart-data="datacollectionConfirmed" v:on> </bar>
        </graph-holder>
      </div>
      <div class="col-sm-6">
        <graph-holder :title="$t('graph_deaths')">
          <bar :chart-data="datacollectionDeath"> </bar>
        </graph-holder>
      </div>
    </div>
  </div>
</template>
<script>
import GraphHolder from "../elements/ui/GraphHolder.vue";
import Bar from "../elements/graph/Bar.vue";
import Api from "../../../api/Api.vue";

import { mapMutations, mapGetters } from "vuex";

export default {
  components: {
    GraphHolder,
    Bar,
  },
  computed: mapGetters({
    countries: "country/countries",
    lastAdded: "country/lastAdded",
    lastRemoved: "country/lastRemoved",
  }),
  data() {
    return {
      datacollectionDeath: {
        labels: [],
        datasets: [],
      },
      datacollectionConfirmed: {
        labels: [],
        datasets: [],
      },
      countriesDayZero: {},
      starting_at: "all_data",
    };
  },
  props: {},
  watch: {
    lastAdded(current, previous) {
      this.loadCountryConfirmedData(current, current.color);
      this.loadCountryDeathData(current, current.color);
    },
    lastRemoved(current, previous) {
      this.removeCountryFromGraphs(current.index);
    },
  },
  mounted() {},
  methods: {
    changeStartPoint($event) {
      console.log($event);
      console.log(this.starting_at);
    },
    async loadCountryConfirmedData(countryData, color) {
      const { data, addDataToGraph } = await this.getCountryData2(
        Api.getCountryConfirmedData.bind(Api),
        countryData,
        color
      );

      this.datacollectionConfirmed = addDataToGraph(
        this.datacollectionConfirmed
      );
      let dayZero = this.calculateCountryDayZero(data);
      this.countriesDayZero[countryData.slug] = dayZero;
      console.log(countryData.slug + ": " + dayZero);
    },
    async loadCountryDeathData(countryData, color) {
      const { data, addDataToGraph } = await this.getCountryData2(
        Api.getCountryDeathData.bind(Api),
        countryData,
        color
      );

      this.datacollectionDeath = addDataToGraph(this.datacollectionDeath);
    },
    async getCountryData2(action, countryData, color) {
      try {
        const data = await action(countryData.slug, countryData.province);

        return {
          data,
          addDataToGraph: (collection) => {
            return this.addDataToGraph(
              collection,
              data,
              countryData.label,
              color
            );
          },
        };
      } catch (e) {
        console.error(e);
      }
    },
    addDataToGraph(graphData, countryData, label, color) {
      var labels = this.extractLabels(countryData);
      var dataset = {
        label: label,
        backgroundColor: color,
        data: this.extractData(countryData),
      };

      let datasets = graphData.datasets;
      datasets.push(dataset);

      return {
        labels: labels,
        datasets: datasets,
      };
    },
    calculateCountryDayZero(countryData) {
      let data = this.extractData(countryData);
      for (var i in data) {
        let value = countryData[i];
        if (value.total > 0) {
          return value.date;
        }
      }
    },
    removeCountryFromGraphs(index) {
      this.datacollectionConfirmed.datasets.splice(index, 1);
      this.datacollectionConfirmed = {
        labels: this.datacollectionConfirmed.labels,
        datasets: this.datacollectionConfirmed.datasets,
      };

      this.datacollectionDeath.datasets.splice(index, 1);
      this.datacollectionDeath = {
        labels: this.datacollectionDeath.labels,
        datasets: this.datacollectionDeath.datasets,
      };
    },
    extractData(countryData) {
      const data = countryData.map((x) => x.total);
      return data;
    },
    extractLabels(countryData) {
      const labels = countryData
        .map((x) => x.date)
        .map((x) =>
          x
            .toISOString()
            .substr(0, 10)
            .split("-")
            .reverse()
            .join("/")
        );
      return labels;
    },
  },
};
</script>
<style lang="scss"></style>
