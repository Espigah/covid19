<script>
import axios from "axios";

class Api {
  getCountries() {
    return axios
      .get("https://api.covid19api.com/countries")
      .then(response => {
        let data = response.data;
        let countries = [];
        for (let i in data) {
          let country = data[i];
          if (!country.Country) {
            continue;
          }
          countries.push({
            label: country.Country,
            province: "",
            slug: country.Slug
          });
          /*
          for (let j in country.Provinces) {
            let province = country.Provinces[j];
            if (!province) {
              continue;
            }
            countries.push({
              label: country.Country + " - " + province,
              province: province,
              slug: country.Slug
            });
          }
          */
        }
        return countries;
      })
      .catch(e => {
        alert(e);
        console.log(e);
      });
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
export default new Api();
</script>
