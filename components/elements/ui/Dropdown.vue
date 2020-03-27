<template>
  <div>
    <b-dropdown id="dropdown" :text="prompt" class="m-md-2">
      <b-dropdown-item
        v-for="item in options"
        :key="item.label"
        @click="change(item)"
        >{{ item.label }}</b-dropdown-item
      >
    </b-dropdown>
  </div>
</template>

<script>
export default {
  props: {
    options: Array
  },
  mounted() {
    this.prompt = "Dropdown";
  },
  methods: {
    change(item) {
      this.prompt = item.label;
      this.$emit("changeOption");
      this.$forceUpdate();
      
    }
  }
};
</script>
