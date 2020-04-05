<script>
import { Line, mixins } from "vue-chartjs";

import { mapMutations, mapGetters } from "vuex";

export default {
  extends: Line,
  mixins: [mixins.reactiveProp],
  props: {
    chartdata: {
      type: Object,
      default: null,
    },
  },
  computed: mapGetters({
    hidden: "country/hidden",
  }),
  mounted() {
    const options = {
      legend: {
        display: false,
        maintainAspectRatio: false,
      },
    };
    this.renderChart(this.chartData, options);
  },
  watch: {
    hidden() {
      this.$nextTick().then(() => {
        this.$data._chart.update();
      });
    },
    chartData: function() {
      this.$data._chart.update();
    },
  },
};
</script>

<style scoped></style>
