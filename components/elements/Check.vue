<template>
  <div>
    <input
      class="form-check-input"
      type="radio"
      name="exampleRadios"
      value="option1"
      
    />

    <flag> </flag>
    <span>BRA</span>
  </div>
</template>

<script>
import Flag from "./Flag.vue";

export default {
  components: {
    Flag
  }
};
</script>
<style>
.NuxtLogo {
  animation: 1s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
