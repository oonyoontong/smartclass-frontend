
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store/index'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: store,
  router: router,
  template: '<App/>',
  components: {
    App
  }
});
