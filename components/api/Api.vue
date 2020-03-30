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
      let baseURL = "https://api.covid19api.com/"
      if(province== ''){
        baseURL += "/total"
      }
      let url = baseURL + "/country/"+country+"/status/confirmed"
      return axios
      .get(url)
      .then((response) => {
      console.log(response)
        let nextDate = new Date("2020-01-22T00:00:00Z")
        let day = 60 * 60 * 24 * 1000;
        var data = response.data
        var countryData =[]
        let total=0
        for (var i in data){
          let readDate = new Date(Date.parse(data[i].Date))
          while(nextDate.getTime() < readDate.getTime()){
            countryData.push(
              {
                "date":nextDate,
                "confirmed":total
              }
            )
            nextDate = new Date(nextDate.getTime() + day);
          }
          countryData.push(
            {
              "date":readDate,
              "confirmed":data[i].Cases
            }
          )
          total = data[i].Cases
          nextDate = new Date (readDate.getTime()+day)
        }
        return countryData
      }).catch((e) =>{
        alert(e);
        console.log(e);
      })
    }
}
export default new Api();
</script>
