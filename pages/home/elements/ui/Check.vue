<template>
  <div
    class="check rounded border row justify-content-between"
    :class="$mq"
    :style='{ borderColor: color + "!important"  }'
  >
    <div class="input-area" @click="change($event)">
      <input class="form-check-input" type="checkbox" value="option1" checked />
      <span class="label">{{ country.substring(0, 3).toUpperCase() }}</span>
      <flag v-if="$mq != 'sm' && $mq != 'xs'"> </flag>
    </div>
    <div>
      <button
        type="button"
        class="close"
        aria-label="Close"
        @click="$emit('remove', country)"
      >
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
  },
  data() {
    return {
      checked: true
    };
  },
  props: {
    country: String,
    color: String
  },
  mounted() {},
  methods: {
    change($event) {
      if ($event.target.type === "checkbox") {
        this.checked = $event.target.checked;
      } else {
        this.checked = !this.checked;
        $event.currentTarget.querySelector("input").checked = this.checked;
      }

      this.$emit("change", this.checked);
    }
  }
};
</script>
<style lang="scss">
.check {
  font-size: 12px;
  max-width: 145px;
  border-width: 5px !important;
  padding-bottom: 5px;
  &.xs {
    font-size: 10px;
    min-height: 20px;
    padding-right: 2px;
  }
  &.sm {
    font-size: 12px;
    min-height: 20px;
    padding-right: 3px;
  }
  &.md,
  &.lg,
  &.xlg {
    font-size: 14px;
    min-height: 40px;
    padding-top: 8px;
  }
}
.label {
  &.xs,
  &.sm {
    line-height: 22px;
  }
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
