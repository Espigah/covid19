<template>
  <div>
    <graph-holder :title="'Cases Confirmed'">
          <bar :chart-data="datacollectionConfirmed"> </bar>
        </graph-holder>
    <graph-holder :title="'Deaths'">
      <bar :chart-data="datacollectionDeath"> </bar>
    </graph-holder>
  </div>
</template>

<script>
import GraphHolder from "./GraphHolder.vue";
import Bar from "../graph/Bar";
import Api from "../../api/Api.vue";

export default {
  components: {
    GraphHolder,
    Bar
  },
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
      countriesList:[]
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
      this.loadCountryConfirmedData(value);
      this.loadCountryDeathData(value);
    },
    countryRemovedEvent(value){
      this.removeCountryFromGraphs(value)
    }
  },
  mounted() {},
  methods: {
    loadCountryConfirmedData(countryData) {
      this.loadCountryData(countryData, "confirmed")
    },
    loadCountryDeathData(countryData) {
      this.loadCountryData(countryData, "deaths")
    },
    loadCountryData(countryData, type) {
      let datacollection = (type=="confirmed") ? this.datacollectionConfirmed: this.datacollectionDeath
      this.countriesList.push(countryData.label)
      Api.getCountryData(countryData.slug, countryData.province, type).then(
        data => {
          let graphData = this.addDataToGraph(datacollection, data, countryData.label);
          if(type=="confirmed"){
            this.datacollectionConfirmed = graphData
          }else{
            this.datacollectionDeath = graphData
          }
        }
      );
    },
    addDataToGraph(graphData, countryData, label) {
        var labels = this.extractLabels(countryData);
        var dataset = {
          label: label,
          backgroundColor: this.randomColor(),
          data: this.extractData(countryData)
        };

        let datasets = graphData.datasets
        datasets.push(dataset)

        return {
          labels: labels,
          datasets: datasets
        };
      },
      removeCountryFromGraphs(country){
        const index = this.countriesList.findIndex(x => x == country);
        this.datacollectionConfirmed.datasets.splice(index,1)
        this.datacollectionDeath.datasets.splice(index,1)
      },
      randomColor() {
        return "#" + (((1 << 24) * Math.random()) | 0).toString(16) + "88"
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
      }
  }
};
</script>
<style lang="scss"></style>
