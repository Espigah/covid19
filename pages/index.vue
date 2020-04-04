<template>
  <home />
</template>

<script>
import Home from "./home/Home.vue";
export default {
  components: {
    Home,
  },
};
</script>

<style lang="scss">
//@import "assets/custom-vars.scss";

// Import Bootstrap and BootstrapVue source SCSS files
//@import "~bootstrap/scss/bootstrap.scss";
//@import "~bootstrap-vue/src/index.scss";

h3,
.h3 {
  @media (max-width: 390px) {
    font-size: 1rem;
  }
}
</style>
