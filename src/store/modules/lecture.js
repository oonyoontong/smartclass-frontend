import axios from 'axios';

const state = {
  activeLecture: null,
  quizIds: [],
}

const getters = {
  quizId: state => {
    if(state.quizIds[0]){
      return state.quizIds[0]
    }
    else{
      return null
    }
  }
}

const mutations = {
  activeLecture: (state, payload) => {
    state.activeLecture = payload
  },
  quizIds: (state, payload) => {
    if(payload){
      state.quizIds = payload
    }
  }
}

const actions = {
  async quizIds({state, rootState, commit, dispatch}, {courseId, lectureId}) {
    // if(!rootState.course.coursesLoaded) await dispatch('registeredCourses').then(response => {
      const quizzes = rootState.course.registeredCourses[courseId].lectures[lectureId].quiz
      commit('quizIds', quizzes)
      console.log("QUIZZES: ", quizzes)
    // })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
