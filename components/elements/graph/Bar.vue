<script>
import { Line, mixins } from 'vue-chartjs'

export default {
  extends: Line,
  mixins: [mixins.reactiveProp],
  props: {
      chartdata: {
        type: Object,
        default: null
      },
      options: {
        type: Object,
        default: null
      }
    },
  mounted() {
    this.renderChart(this.chartData, this.options)
  },
  watch: {
    chartData: function() {
      this.$data._chart.update()
    }
  }
}
</script>
