<template>
  <div class="container">
    <input type="radio" id="from_beg" value="all_data" v-model="starting_at"  @click="changeStartPoint($event)">
    <label for="from_beg">All data</label>
    <br>
    <input type="radio" id="from_d_zero" value="day_zero" v-model="starting_at" @click="changeStartPoint($event)">
    <label for="from_d_zero">Day Zero</label>
    <br>
    <graph-holder :title="'Cases Confirmed'">
      <bar :chart-data="datacollectionConfirmed" v:on> </bar>
    </graph-holder>
    <graph-holder :title="'Deaths'">
      <bar :chart-data="datacollectionDeath"> </bar>
    </graph-holder>
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
    Bar
  },
  computed: mapGetters({
    countries: "country/countries"
  }),
  data() {
    return {
      datacollectionDeath: {
        labels: [],
        datasets: []
      },
      datacollectionConfirmed: {
        labels: [],
        datasets: []
      },
      countriesList: [],
      countriesDayZero: {},
      starting_at: "all_data"
    };
  },
  props: {
    countryAddedEvent: {
      type: Object,
      required: true
    },
    countryRemovedEvent: {
      type: String,
      required: true
    }
  },
  watch: {
    countryAddedEvent(value) {
      let color = this.randomColor();
      this.loadCountryConfirmedData(value, color);
      this.loadCountryDeathData(value, color);
      this.countriesList.push(value.label);
    },
    countryRemovedEvent(value) {
      const index = this.countriesList.findIndex(x => x == value);
      this.countriesList.splice(index, 1);
      this.removeCountryFromGraphs(index);
    }
  },
  mounted() {},
  methods: {
    changeStartPoint($event){
        console.log($event)
        console.log(this.starting_at)
    },
    loadCountryConfirmedData(countryData, color) {
      this.loadCountryData(countryData, "confirmed", color);
    },
    loadCountryDeathData(countryData, color) {
      this.loadCountryData(countryData, "deaths", color);
    },
    loadCountryData(countryData, type, color) {
      let datacollection =
        type == "confirmed"
          ? this.datacollectionConfirmed
          : this.datacollectionDeath;
      Api.getCountryData(countryData.slug, countryData.province, type).then(
        data => {
          let graphData = this.addDataToGraph(
            datacollection,
            data,
            countryData.label,
            color
          );
          if (type == "confirmed") {
            this.datacollectionConfirmed = graphData;
            let dayZero = this.calculateCountryDayZero(data);
            this.countriesDayZero[countryData.slug] = dayZero;
            console.log(countryData.slug + ": " + dayZero);
          } else {
            this.datacollectionDeath = graphData;
          }
        }
      );
    },
    addDataToGraph(graphData, countryData, label, color) {
      var labels = this.extractLabels(countryData);
      var dataset = {
        label: label,
        backgroundColor: color,
        data: this.extractData(countryData)
      };

      let datasets = graphData.datasets;
      datasets.push(dataset);

      return {
        labels: labels,
        datasets: datasets
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
        datasets: this.datacollectionConfirmed.datasets
      };

      this.datacollectionDeath.datasets.splice(index, 1);
      this.datacollectionDeath = {
        labels: this.datacollectionDeath.labels,
        datasets: this.datacollectionDeath.datasets
      };
    },
    randomColor() {
      return "#" + (((1 << 24) * Math.random()) | 0).toString(16) + "88";
    },
    extractData(countryData) {
      var data = [];
      for (var i in countryData) {
        data.push(countryData[i].total);
      }
      return data;
    },
    extractLabels(countryData) {
      var labels = [];
      for (var i in countryData) {
        labels.push(countryData[i].date);
      }
      return labels;
    },
    ...mapMutations({
      addCountry: "country/add"
    })
  }
};
</script>
<style lang="scss"></style>
