import axios from "axios/index";

const state = {
  feedbackList: []
}

const getters = {
};

const mutations = {

  SET_FEEDBACK_LIST: (state,payload) => {
    if (payload.isArray){
      state.feedbackList = payload
    } else {
      state.feedbackList = payload
    }
  }
}

const actions = {

  async fetchFeedbackList({commit, state, rootState}, lectureId){
    console.log("finding feedback");
    axios.post(rootState.backendUrl + 'feedback/', {
      lectureId: lectureId
    })
      .then(response => {
        const feedbackList = response.data
        console.log("Feedback found");
        console.log(feedbackList);
        commit('SET_FEEDBACK_LIST', feedbackList)
      })
  }
};



export default {
  state,
  getters,
  mutations,
  actions
}
