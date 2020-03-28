<template>
  <div>
    <graph-holder>
      <bar :chart-data="datacollection"> </bar>
    </graph-holder>
    lista: {{ countryList }}
  </div>
</template>

<script>
import GraphHolder from "./GraphHolder.vue";
import Bar from "../graph/Bar";

export default {
  components: {
    GraphHolder,
    Bar
  },
  data() {
    return {
      datacollection: {}
    };
  },
  props: {
    countryList: {
      type: Array,
      required: true
    }
  },
  mounted() {
    this.datasets = [];
    this.updateGraph(this.countryList);
  },
  watch: {
    countryList(value) {
      this.updateGraph(value);
    }
  },
  methods: {
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    },
    createGraphData(label) {
      return {
        label,
        backgroundColor: "#" + (((1 << 24) * Math.random()) | 0).toString(16) + "88",
        data: [this.getRandomInt(), this.getRandomInt()]
      };
    },
    updateGraph(list) {
      this.dataset = this.dataset || [];
      this.dataset = list.map(element => {
        const index = this.dataset.findIndex(x => x.label == element.label);
        const data = this.dataset[index] || this.createGraphData(element.label);
        return data;
      });

      this.datacollection = {
        labels: ["x", "y"],
        datasets: this.dataset
      };
    }
  }
};
</script>
<style lang="scss"></style>
