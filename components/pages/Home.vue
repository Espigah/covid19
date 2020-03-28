<template>
  <div>
    <navbar />
    <div class="container">
      <div>
        <dropdown />
        <div class="row sticky">
          <check class="col-2" />
          <check class="col-2" />
          <check class="col-2" />
          <check class="col-2" />
          <check class="col-2" />
          <check class="col-2" />
          <check class="col-2" />
        </div>


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
import Logo from "../elements/ui/Logo.vue";
import Api from "../api/Api.vue";
import Check from "../elements/ui/Check.vue";
import Dropdown from "../elements/ui/Dropdown.vue";
import Navbar from "../elements/ui/Navbar.vue";
import GraphHolder from "../elements/ui/GraphHolder.vue";

import Bar from "../elements/graph/Bar.vue";

export default {
  components: {
    Logo,
    Bar,
    Check,
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
      }
      , countries: null
      , contriesData: []
      , graphColors: ["#f87979", "#f87979", "#f87979"]
    };
  },
  mounted() {
  },
  created() {
    Api.getCountries().then(data => {
      this.countries = data
      console.log("Total Countries loaded: "+this.countries.length)
      console.log(this.countries)

      //this.loadCountryConfirmedData(this.countries[11])
      this.loadCountryConfirmedData(this.countries[26])
    });
    
  },
  methods: {
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

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
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
