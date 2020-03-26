<template>
  <div class="container">
    <div>
      <check />
      <bar :chart-data="datacollection"> </bar>
      <logo />
      <h1 class="title">
        Covid19
      </h1>
      <h2 class="subtitle">
        Corona virus
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '../elements/Logo.vue'
import Bar from '../elements/Bar.vue'
import Api from '../api/Api.vue'
import Check from '../elements/Check.vue'

export default {
  components: {
    Logo,
    Bar,
    Check
  },
  data() {
    return {
      datacollection: null
    }
  },
  mounted() {
    this.fillData()
  },
  created() {
    Api.get().then((data) => {
      setTimeout(() => {
        this.datacollection.datasets[0].label = data
      }, 5000)
    })
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: [this.getRandomInt(), this.getRandomInt()],
        datasets: [
          {
            label: 'Data 2',
            backgroundColor: '#f87979',
            data: [this.getRandomInt(), this.getRandomInt()]
          },
          {
            label: 'Data 1',
            backgroundColor: '#f87979',
            data: [this.getRandomInt(), this.getRandomInt()]
          }
        ]
      }
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
