<template>
  <div class="row sticky">
    <check
      class="col-xs-3 col-sm-4"
      v-for="item in countries"
      :key="item.label"
      @change="change($event, item)"
      @remove="$emit('remove', $event, item)"
      :color="item.color"
      :country="item.label"
    />
  </div>
</template>

<script>
import Check from "./Check.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    Check
  },
  props: {},
  computed: mapGetters({
    countries: "country/countries"
  }),
  mounted() {},
  methods: {
    change($event, item) {
      this.$emit("change", { check: $event, ...item });
    }
  }
};
</script>
<style scoped>
.row {
  justify-content: center;
}
.check {
  margin: 5px 3px;
}
</style>
