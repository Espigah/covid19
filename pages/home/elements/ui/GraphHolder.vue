<template>
  <div id="parent border">
    <h3>{{ title }}</h3>

    <slot class="slot"></slot>
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
  mounted() {},
  methods: {}
};
</script>

<style scoped>
.wrapper {
  position: relative;
  height: 40vh;
  width: 80vw;
}
</style>
