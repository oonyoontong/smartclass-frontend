import axios from "axios/index";

const state = {
  liveList: []
}

const getters = {
  getLiveList: (state) => {
    state.liveList.sort(function(left,right){
      return (left.upvotes < right.upvotes) ? 1 : ((right.upvotes < left.upvotes) ? -1 : 0)
    })
    return state.liveList;
  }
};



const mutations = {
  SOCKET_ADD_LIVE_QUESTION: (state,payload) => {
    state.liveList.push(payload)
  },

  SET_LIVE_LIST: (state,payload) => {
    if (payload.isArray){
      state.liveList = payload;
    } else {
      state.liveList = payload;
    }
  }
};

const actions = {
  async socket_sendMessage({commit, state, rootState},liveQuestion){
    //TODO store message in mongoose
  },

  async fetchLiveList({commit, state, rootState}, lectureId){
    //TODO get messages from mongoose
    console.log("SENDING THIS LECTURE ID TO SERVER "+ lectureId);
    axios.post(rootState.backendUrl + 'live/', {
      lectureId: lectureId
    })
      .then(response => {
        const liveList = response.data
        commit('SET_LIVE_LIST', liveList)
        console.log("liveList from server")
        console.log(liveList);
      })
  }
};



export default {
  state,
  getters,
  mutations,
  actions
}
