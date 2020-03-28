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

        <graph-area :countryList="countryList"> </graph-area>
      </div>
    </div>
  </div>
</template>

<script>
import Api from "../api/Api.vue";
import CountryList from "../elements/ui/CountryList.vue";
import Dropdown from "../elements/ui/Dropdown.vue";
import Navbar from "../elements/ui/Navbar.vue";
import GraphArea from "../elements/ui/GraphArea.vue";

export default {
  components: {
    CountryList,
    Dropdown,
    Navbar,
    GraphArea
  },
  data() {
    return {
      countryList: [],
      dropdownOptions: []
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
        console.log("dropdownOptions", data);
        this.dropdownOptions = data.filter(a => !a.province);
        this.$forceUpdate();
      });
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
