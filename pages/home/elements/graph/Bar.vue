<script>
import { Line, mixins } from "vue-chartjs";

export default {
  extends: Line,
  mixins: [mixins.reactiveProp],
  props: {
    chartdata: {
      type: Object,
      default: null
    }
  },
  mounted() {
    const options = {
      legend: {
        display: false
      }
    };
    this.renderChart(this.chartData, options);
  },
  watch: {
    chartData: function() {
      this.$data._chart.update();
    }
  }
};
</script>
