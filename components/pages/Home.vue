<template>
  <div>
    <navbar />
    <div class="container">
      <div>
        <dropdown :options="dropdownOptions"></dropdown>
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
      datacollection: null,
      countries: null
    };
  },
  mounted() {
    this.fillData();
    this.getCountries();
  },
  created() {},
  methods: {
    getCountries() {
      this.dropdownOptions = [];
      Api.getCountries().then(data => {
        console.log("dropdownOptions", data);
        this.dropdownOptions = data;
        this.$forceUpdate();
      });
    },
    fillData() {
      this.datacollection = {
        labels: [this.getRandomInt(), this.getRandomInt()],
        datasets: [
          {
            label: "Data 2",
            backgroundColor: "#f87979",
            data: [this.getRandomInt(), this.getRandomInt()]
          },
          {
            label: "Data 1",
            backgroundColor: "#f87979",
            data: [this.getRandomInt(), this.getRandomInt()]
          }
        ]
      };
      this.countries = [{ Country: "" }, { Country: "" }, { Country: "" }];
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
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
v-bind:

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
