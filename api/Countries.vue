<script>
import axios from 'axios';
import Continent from './Continent.vue';

class Countries {
  get() {
    return axios
      .get('https://api.covid19api.com/countries')
      .then((response) => {
        const countries = response.data
          .filter((x) => x.Country)
          .map((country) => {
            return {
              country: country.Country,
              province: '',
              slug: country.Slug,
              iso2: (country.ISO2 || '').toLowerCase(),
              continent: Continent.getType(country.Slug),
            };
          });

        return Object.freeze(countries);
      })
      .catch((e) => {
        alert(e);
        console.log(e);
        //return Promise.reject(e);
        return [{slug:'brazil'}]
      });
  }
}
export default new Countries();
</script>
