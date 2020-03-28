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
        /*
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
        */
      }
      return countries
    }).catch((e) =>{
      this.errors.push(e)
    })
  }

  getConfirmedCountryData(country, province){
    var baseURL = "https://api.covid19api.com/"
    if(province== ''){
      baseURL += "/total"
    }
    var url = baseURL + "/country/"+country+"/status/confirmed"
    return axios
    .get(url)
    .then((response) => {
      var data = response.data
      var countryData =[]
      for (var i in data){
        countryData.push(
          {
            "date":data[i].Date.substring(5,10),
            "confirmed":data[i].Cases
          }
        )
      }
      return countryData
    }).catch((e) =>{
      this.errors.push(e)
    })
  }
}
export default new Api()
</script>
