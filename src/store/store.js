import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    products: [
      {name: 'Banana Peel', price: 20},
      {name: 'Shiny Star', price: 40},
      {name: 'Green Shell', price: 60},
      {name: 'Blue Shell', price: 80}
    ]
  },
  getters: {
    saleProducts: state => {
      return state.products.map(product => {
        return {
          name: '**' + product.name + '**',
          price: product.price / 2
        }
      })
    }
  }
})