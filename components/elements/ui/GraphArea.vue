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
      datacollection: []
    };
  },
  props: {
    countryList: {
      type: Array,
      required: true
    }
  },
  mounted() {
    this.fillData();
  },
  methods: {
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
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    }
  }
};
</script>
<style lang="scss"></style>
