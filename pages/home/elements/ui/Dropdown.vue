<template>
  <div>
    <b-dropdown id="dropdown" :text="!prompt ? $t('dropdown') : prompt" class="m-md-2" :class="$mq">
      <input type="text" placeholder="Search.." id="dropdown-search" @keyup="filter()" />
      <continents @continent="addContinent" type="text" placeholder="Search.." id="dropdown-search" @keyup="filter()" />
      <b-dropdown-item v-for="item in orderedTranslatedOptions" :key="item.label" @click="change(item)">{{ item.label }}</b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
import Continents from './Continents.vue';

export default {
  components: {
    Continents,
  },
  props: {
    options: Array,
  },
  data() {
    return {
      prompt: '',
    };
  },
  computed: {
    orderedTranslatedOptions: function() {
      const traslatedOptions = this.options.map((data) => {
        return { ...data, label: this.$t(data.country) };
      });

      return this.sort(traslatedOptions, 'label');
    },
  },
  methods: {
    addContinent(item) {
      this.options
        .filter(({ continent }) => continent == item.type)
        .map((item, i) => {
          setTimeout(this.change, i * 1000, item);
        });
    },
    sort(list, property) {
      return list.sort((a, b) => {
        var x = a[property].toLowerCase();
        var y = b[property].toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
      });
    },
    change(item) {
      this.prompt = item.label;
      this.$ga.event('country', item.country, item.slug, 1);
      this.$emit('add', { ...item });
      this.$forceUpdate();
    },
    filter() {
      //https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_js_dropdown_filter
      let input, filter, li, div;
      input = document.getElementById('dropdown-search');
      filter = input.value.toUpperCase();
      div = document.getElementsByClassName('dropdown-menu')[0];
      li = div.getElementsByTagName('li');
      for (let i = 0, max = li.length; i < max; i++) {
        let currentLi = li[i];
        let txtValue = currentLi.textContent || currentLi.innerText;
        currentLi.style.display = txtValue.toUpperCase().indexOf(filter) > -1 ? '' : 'none';
      }
    },
  },
};
</script>
<style lang="scss">
.dropdown {
  min-width: 300px;
  &.tn {
    transform: translateX(-23%);
    min-width: 100vw;
  }
  &.xs {
    min-width: 10vw;
  }
  button {
    background: black;
    &:hover {
      background-color: black !important;
    }
  }
}
.dropdown-menu {
  width: 100%;
  overflow-y: scroll;
  max-height: 40vh;
  top: 30px;
  color: #ddd;
}
#dropdown-search {
  width: 100%;
  box-sizing: border-box;
  // background-image: url("searchicon.png");
  background-position: 14px 12px;
  background-repeat: no-repeat;
  font-size: 16px;
  padding: 8px 20px 6px 45px;
  border: none;
  border-bottom: 1px solid #ddd;
  margin-bottom: 5px;
  &:focus {
    outline: 3px solid #ddd;
  }
}
</style>
