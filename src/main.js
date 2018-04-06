import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store/index'
import VueSocketio from "vue-socket.io"

Vue.use(VueSocketio, "https://smartclass-backend.herokuapp.com/")
Vue.config.productionTip = false

/* eslint-disable no-new */
export default new Vue({
  el: '#app',
  store: store,
  router: router,
  template: '<App/>',
  components: {
    App
  }
});


