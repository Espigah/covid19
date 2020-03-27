<script>
import axios from 'axios'

class Api {
  getCountries(){
    return axios
    .get("https://api.covid19api.com/countries")
    .then((response) => {
      var data = response.data
      var countries = []
      for (var i in data){
        var country = data[i]
        countries.push({
          "label": country.Country,
          "province": "",
          "slug": country.Slug
        })
        for (var j in country.Provinces){
          var province = country.Provinces[j]
          if (province==''){
            continue
          }
          countries.push({
            "label": country.Country + " - " + province,
            "province": province,
            "slug": country.Slug
          })
        }
      }
      return countries
    }).catch((e) =>{
      this.errors.push(e)
    })
  }

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
