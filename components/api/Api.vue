<script>
import axios from 'axios'

class Api {
  get() {
    return axios
      .get(`http://www.mocky.io/v2/5e7bd43d2d0000dc8b11a7af`)
      .then((response) => {
        // JSON responses are automatically parsed.
        return response.data.name
      })
      .catch((e) => {
        this.errors.push(e)
      })
  }
}
export default new Api()
</script>
