<script>
const sul = {
  type: 'SUL',
  countries: ['brazil', 'argentina', 'chile','bolivia','colombia','paraguay','peru','uruguay','venezuela'],
};

class Continent {
  getType(slug) {
    if (sul.countries.includes(slug)) {
      return sul.type;
    }

    return '';
  }
}
export default new Continent();
</script>
