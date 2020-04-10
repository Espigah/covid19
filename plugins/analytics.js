import Vue from "vue";
import VueAnalytics from "vue-analytics";

Vue.use(VueAnalytics, {
  id: "UA-162898264-1",
  beforeFirstHit() {
    Vue.$ga.set("anonymizeIp", false);
  }
});
