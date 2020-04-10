<script>
import axios from "axios";

class Countries {
  get() {
    return axios
      .get("https://api.covid19api.com/countries")
      .then(response => {
        const countries = response.data
          .filter(x => x.Country)
          .map(country => {
            return {
              country: country.Country,
              province: "",
              slug: country.Slug
            };
          });

        return Object.freeze(countries);
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
