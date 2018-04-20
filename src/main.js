import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store/index'
import VueSocketio from "vue-socket.io"
import VModal from 'vue-js-modal'
import VueStarRating from "vue-star-rating"
Vue.use(VModal)

Vue.use(VueSocketio, "https://smartclass-backend.herokuapp.com/")
Vue.config.productionTip = false


Vue.component('star-rating', VueStarRating.default);

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


