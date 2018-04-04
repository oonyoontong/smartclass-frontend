import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import state from './state'

import account from './modules/account'
import course from './modules/course'
import lecture from './modules/lecture'
import quiz from './modules/quiz'
import ui from './modules/ui'

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    account,
    course,
    lecture,
    quiz,
    ui
  },
  state,
  getters,
  mutations,
  actions
});
