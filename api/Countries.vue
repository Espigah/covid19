<script>
import axios from "axios";

class Countries {
  get() {
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
        return Promise.reject(e);
      });
  }
}
export default new Countries();
</script>
