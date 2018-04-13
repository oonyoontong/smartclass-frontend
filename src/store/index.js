import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'

import account from './modules/account'
import course from './modules/course'
import lecture from './modules/lecture'
import quiz from './modules/quiz'
import ui from './modules/ui'
import live from './modules/live'

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    account,
    course,
    lecture,
    quiz,
    ui,
    live
  },
  state,
  mutations
});
