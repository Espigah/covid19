<template>
  <div>
    <b-dropdown-item v-for="item in orderedTranslatedOptions" :key="item.label" @click="change(item)">{{ item.label }}</b-dropdown-item>
  </div>
</template>

<script>
export default {
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
      const traslatedOptions = [{ label: 'América do Sul', type: 'SUL' } /*, { label: 'América do Norte' }*/];

      return this.sort(traslatedOptions, 'label');
    },
  },
  methods: {
    sort(list, property) {
      return list.sort((a, b) => {
        var x = a[property].toLowerCase();
        var y = b[property].toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
      });
    },
    change(item) {
      this.$emit('continent', { ...item });
      this.$forceUpdate();
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
</style>
