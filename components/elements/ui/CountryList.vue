<template>
  <div class="row sticky">
    <check
      class="col-3 col-sm-3 col-md-2 col-lg-1"
      v-for="item in list"
      :key="item.label"
      @change="change($event, item)"
      @remove="$emit('remove', $event, item)"
      :country="item.label"
    />
  </div>
</template>

<script>
import Check from "./Check.vue";

export default {
  components: {
    Check
  },
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  mounted() {
  },
  methods: {
    change($event, item) {
      this.$emit("change", { $event, label: item });
    }
  }
};
</script>
<style>
.row {
  justify-content: center;
}
</style>
