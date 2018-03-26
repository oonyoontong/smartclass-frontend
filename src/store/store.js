import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  state: {
    products: [
      {name: 'Banana Peel', price: 20},
      {name: 'Shiny Star', price: 40},
      {name: 'Green Shell', price: 60},
      {name: 'Blue Shell', price: 80}
    ],
    isPlatformMobile: false
  },
  getters: {
    saleProducts: state => {
      return state.products.map(product => {
        return {
          name: '**' + product.name + '**',
          price: product.price / 2
        }
      })
    },
    products: state => {
      return state.products
    }
  },
  mutations: {
    reducePrice: (state, payload) => {
      state.products.forEach(product => {
        product.price -= payload
      })
    }
  },
  actions: {
    reducePrice: (context, payload) => {
      setTimeout(function () {
        context.commit('reducePrice', payload)
      }, 2000)
    }
  }
})
