import axios from 'axios';

const state = {
  activeLecture: null,
  quizzes: [],
}

const getters = {
  quiz: state => {
    console.log("QUIZ", state.quizzes)
    if (state.quizzes[0]) {
      return state.quizzes[0]
    }
    else {
      return null
    }
  }
}

const mutations = {
  activeLecture: (state, payload) => {
    state.activeLecture = payload
  },
  quizzes: ({state}, payload) => {
    if (payload) {
      state.quizzes = payload
    }
  },
}

const actions = {
  async quizzes({state, rootState, commit, dispatch}, {courseId, lectureId}) {
    const quizzes = rootState.course.registeredCourses[courseId].lectures[lectureId].quiz
    commit('quizzes', quizzes)
    console.log("QUIZZES: ", quizzes)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
