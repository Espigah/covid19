<template>
  <div>
    <graph-holder :title="'mortes'">
      <bar :chart-data="datacollection"> </bar>
    </graph-holder>
    <graph-holder :title="'contagio'">
      <bar :chart-data="datacollection"> </bar>
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
      datacollection: {
        labels: [],
        datasets: []
      },
      countriesData: [],
      graphColors: [
        "#f87979",
        "#f87979",
        "#" + (((1 << 24) * Math.random()) | 0).toString(16) + "88"
      ]
    };
  },
  props: {
    countryList: {
      type: Array,
      required: true
    }
  },
  watch: {
    countryList(value) {
      //this.updateGraph(value);
      //DEBUG
      this.loadCountryConfirmedData(value[0]);
    }
  },
  mounted() {},
  methods: {
    loadCountryConfirmedData(countryData) {
      Api.getConfirmedCountryData(countryData.slug, countryData.province).then(
        data => {
          this.countriesData[countryData.slug] = data;
          this.addDataToGraph(data, countryData.label);
        }
      );
    },
    addDataToGraph(countryData, label) {
      console.log("Adding country on graph: " + label);

      var labels = this.extractLabels(countryData);
      var dataset = {
        label: label,
        backgroundColor: this.graphColors[this.totalGraphElements()],
        data: this.extractData(countryData)
      };

      this.datacollection = {
        labels: labels,
        datasets: [dataset]
      };
    },
    totalGraphElements() {
      return this.datacollection.datasets.length;
    },
    extractData(countryData) {
      var data = [];
      for (var i in countryData) {
        data.push(countryData[i].confirmed);
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
