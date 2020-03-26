<template>
  <div class="rounded border check row justify-content-between">
    <div class="input-area">
      <input
        class="form-check-input"
        type="checkbox"
        value="option1"
      />

      <span>BRA</span>
      <flag> </flag>
    </div>
    <div>
      <button type="button" class="close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
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
.check {
  min-height: 40px;
  padding-top: 8px;
}
.button {
  width: 25px;
  height: 25px;
}
.input-area {
  margin-left: 15px;
  cursor: pointer;
}
</style>
