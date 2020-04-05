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
          @change="onContryListChange($event)"
          @remove="removeCountry($event)"
        ></country-list>

        <graph-area class="graph-area"> </graph-area>
      </div>
    </div>
    <div class="container container-footer">
      <div class="row">
        <info />
        <footer-content class="w-100" />
      </div>
    </div>
  </div>
</template>

<script>
import Api from "../../api/Api.vue";
import CountryList from "./elements/ui/CountryList.vue";
import Dropdown from "./elements/ui/Dropdown.vue";
import Navbar from "./elements/ui/Navbar.vue";
import GraphArea from "./components/GraphArea.vue";
import Introduction from "./elements/ui/Introduction.vue";
import Info from "./elements/ui/Info.vue";
import FooterContent from "./elements/ui/FooterContent.vue";

import { mapMutations, mapGetters } from "vuex";

export default {
  components: {
    CountryList,
    Dropdown,
    Navbar,
    GraphArea,
    Introduction,
    Info,
    FooterContent,
  },
  data() {
    return {
      countryList: [],
      countryAddedEvent: {},
      countryRemovedEvent: "",
      dropdownOptions: [],
    };
  },
  mounted() {
    this.getCountries();
  },
  created() {},
  methods: {
    async getCountries() {
      this.dropdownOptions = [];
      try {
        const data = await Api.countries.get();
        console.log("Total Countries loaded: " + data.length);
        this.dropdownOptions = data.filter((a) => !a.province);
        this.$forceUpdate();
      } catch (error) {
        console.log(error);
      }
    },
    onContryListChange($event) {
      const index = this.countryList.findIndex((x) => x.label == $event.label);
      let data = this.countryList[index] || {};
      data.hidden = !$event.check; //se o checkbox estiver ativo o grafico sera mostrado
    },
    ...mapMutations({
      addCountry: "country/add",
      removeCountry: "country/remove",
    }),
  },
};
</script>

<style scoped lang="scss">
.container {
  margin: 0 auto;
}

.graph-area {
  margin-bottom: 10px;
}

.centred {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.container-content {
  position: relative;
  padding: 20px 35px;
}

.sticky {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  background: rgba($color: #fff, $alpha: 0.7);
  padding-bottom: 10px;
  padding-top: 10px;
  z-index: 10;
}

.container-fotter {
  margin-top: 35px;
}
</style>
