import axios from 'axios';

const state = {
  activeLecture: null,
}

const getters = {

}

const mutations = {
  activeLecture: (state, payload) => {
    console.log("SETTING ACTIVE LECTURE")
    state.activeLecture = payload
  }
}

const actions = {

}

export default {
  state,
  getters,
  mutations,
  actions
}
