<template>
  <div>
    <navbar />
    <div class="container">
      <div class="col container-content">
        <dropdown
          :options="dropdownOptions"
          @add="addCounty($event)"
        ></dropdown>

        <country-list
          :list="countryList"
          @remove="removeCounty($event)"
        ></country-list>

        <graph-holder>
          <bar :chart-data="datacollection"> </bar>
        </graph-holder>

        <logo />
        <h1 class="title">
          Covid19
        </h1>
        <h2 class="subtitle">
          Corona virus
        </h2>
        <div class="links">
          <a href="https://nuxtjs.org/" target="_blank" class="button--green">
            Documentation
          </a>
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            class="button--grey"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Api from "../api/Api.vue";
import CountryList from "../elements/ui/CountryList.vue";
import Dropdown from "../elements/ui/Dropdown.vue";
import Navbar from "../elements/ui/Navbar.vue";
import GraphHolder from "../elements/ui/GraphHolder.vue";

import Bar from "../elements/graph/Bar.vue";

export default {
  components: {
    Bar,
    CountryList,
    Dropdown,
    Navbar,
    GraphHolder,
    Bar
  },
  data() {
    return {
      datacollection: {
        labels:[],
        datasets:[]
        },
      countryList: [],
      dropdownOptions: [],
      countries: null,
      contriesData: [],
      graphColors: ["#f87979", "#f87979", "#f87979"]
    };
  },
  mounted() {
    this.getCountries();
  },
  created() {},
  methods: {
    getCountries() {
      this.dropdownOptions = [];
      Api.getCountries().then(data => {
        console.log("Total Countries loaded: "+this.countries.length)
        this.dropdownOptions = data.filter(a => !a.province);
        this.$forceUpdate();

        this.loadCountryConfirmedData(this.countries[26])
      });
    },
    loadCountryConfirmedData(countryData){
          Api.getConfirmedCountryData(countryData.slug, countryData.province).then(data => {
            this.contriesData[countryData.slug] = data
            this.addDataToGraph(data, countryData.label)
          })
    },
    addDataToGraph(countryData, label) {
      console.log("Adding country on graph: "+label)

      var labels = this.extractLabels(countryData)
      var dataset = {
        "label": label,
        backgroundColor: this.graphColors[this.totalGraphElements()],
        data: this.extractData(countryData)
      }

      this.datacollection = {
        labels: labels,
        datasets: [dataset]
      }
    },
    totalGraphElements(){
      return this.datacollection.datasets.length
    },
    extractData(countryData){
      var data=[]
      for (var i in countryData){
        data.push(countryData[i].confirmed)
      }
      return data
    },
    extractLabels(countryData){
      var labels=[]
      for (var i in countryData){
        labels.push(countryData[i].date)
      }
      return labels
    },
    addCounty($event) {
      const index = this.countryList.findIndex(x => x.label == $event.label);
      if (index > -1) {
        return;
      }
      this.countryList.push($event);
    },
    removeCounty(country) {
      this.countryList = this.countryList.filter(x => x.label !== country);
    }
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.container-content {
  position: absolute;
  top: 50px;
  padding: 20px 35px;
}

.check {
  margin: 5px 3px;
}

.sticky {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  background: #ffffffe6;
  padding-bottom: 10px;
  padding-top: 10px;
}
</style>
