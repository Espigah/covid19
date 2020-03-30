<template>
  <div>
    <navbar />
    <div class="container centred">
      <div class="col container-content">
        <introduction />
        <dropdown
          :options="dropdownOptions"
          @add="addCountry($event)"
        ></dropdown>

        <country-list
          :list="countryList"
          @remove="removeCountry($event)"
        ></country-list>

        <graph-area :countryAddedEvent="countryAddedEvent" :countryRemovedEvent="countryRemovedEvent"> </graph-area>
      </div>
    </div>
    <div class="container">
      <info />
      <footer-content />
    </div>
  </div>
</template>

<script>
import Api from "../api/Api.vue";
import CountryList from "../elements/ui/CountryList.vue";
import Dropdown from "../elements/ui/Dropdown.vue";
import Navbar from "../elements/ui/Navbar.vue";
import GraphArea from "../elements/ui/GraphArea.vue";
import Introduction from "../elements/ui/Introduction.vue";
import Info from "../elements/ui/Info.vue";
import FooterContent from "../elements/ui/FooterContent.vue";

export default {
  components: {
    CountryList,
    Dropdown,
    Navbar,
    GraphArea,
    Introduction,
    Info,
    FooterContent
  },
  data() {
    return {
      countryList: [],
      countryAddedEvent: {},
      countryRemovedEvent: "",
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
        console.log("Total Countries loaded: " + data.length);
        this.dropdownOptions = data.filter(a => !a.province);
        this.$forceUpdate();
      });
    },
    addCountry($event) {
      const index = this.countryList.findIndex(x => x.label == $event.label);
      if (index > -1) {
        return;
      }
      this.countryList.push($event);
      this.countryAddedEvent = $event;
    },
    removeCountry($event) {
      this.countryList = this.countryList.filter(x => x.label !== $event);
      this.countryRemovedEvent = $event;
    }
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
}

.centred {
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
