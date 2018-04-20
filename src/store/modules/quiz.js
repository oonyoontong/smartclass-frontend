import axios from 'axios';

const state = {
  quizContent: {},
  quizLoaded: false
}

const getters = {
  questions(state) {
    return state.quizContent.questions
  },
  quizLoaded(state) {
    return state.quizLoaded
  }
}

const mutations = {
  quizContent(state, quizContent) {
    state.quizContent = quizContent
  },
  quizLoaded(state, isLoaded) {
    state.quizLoaded = isLoaded
  }
}

const actions = {
  async quizContent({commit, state, rootState}, quizId) {
    console.log("Getting Quiz:", quizId)
    return axios.post(rootState.backendUrl + 'quiz', {quizId: quizId})
      .then(response => {
        response.data['numQuestions'] = response.data.questions.length
        commit('quizContent', response.data)
        commit('quizLoaded', true)
      })
      .catch(error => {
        console.log(error)
      })
  },
  submitQuiz({commit, state, rootState}) {

  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
