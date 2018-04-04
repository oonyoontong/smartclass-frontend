import Vue from 'vue';
import Vuex from 'vuex';

import ui from './modules/ui'
import course from './modules/course'
import account from './modules/account'

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    ui,
    course,
    account
  },
  state: {
    backendUrl: "https://smartclass-backend.herokuapp.com/",
    isPlatformMobile: false
  },
  getters: {

  },
  mutations: {

  },
  actions: {

  }
})
