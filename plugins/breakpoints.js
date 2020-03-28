import Vue from 'vue'
import VueMq from 'vue-mq'
//https://getbootstrap.com/docs/4.0/layout/overview/
Vue.use(VueMq, {
  breakpoints: {
    xs: 360,
    sm: 576,
    md: 768,
    lg: 992,
    xlg: Infinity,
  }
})