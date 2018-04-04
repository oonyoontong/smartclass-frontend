import Vue from 'vue';
import Vuex from 'vuex';

import ui from './modules/ui'
import course from './modules/course'
import account from './modules/account'
import quiz from './modules/quiz'

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    account,
    course,
    quiz,
    ui
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
