import axios from "axios/index";

const state = {
  liveList: []
}

const getters = {
  getLiveList(){
    return state.liveList;
  }
};



const mutations = {
  SOCKET_ADD_LIVE_QUESTION(liveQuestion){
    state.liveList.push(liveQuestion);
    state.liveList.sort(function(left,right){
      return (left.upvotes > right.upvotes) ? 1 : ((right.upvotes > left.upvotes) ? -1 : 0);
    })
  }
};

const actions = {
  socket_sendMessage: (context,liveQuestion) => {
    //TODO store message in mongoose
  }
};



export default {
  state,
  getters,
  mutations,
  actions
}
