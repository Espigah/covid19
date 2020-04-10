<template>
  <div id="parent border">
    <h3>{{ title }}</h3>
    <div
      class="chart-container"
    >
      <slot class="slot"></slot>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
      requered: true
    }
  },
  shallowMounted() {},
  methods: {}
};
</script>

<style scoped>

</style>
