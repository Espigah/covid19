<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="">
      <b-navbar-brand href="#"><icon class="icon"/></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav> </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import Icon from "./Icon.vue";

export default {
  components: {
    Icon
  }
};
</script>

<style scoped lang="scss">
.icon {
  height: 40px;
  width: 40px;
  position: absolute;
  left: 0;
  top: 0;
  margin-top: 10px;
  margin-left: 10px;
  @media (min-width: 992px) {
    margin-top: 5px;
    height: 20px;
    width: 20px;
  }
}

.navbar {
  background-color: #000000;
}
</style>
