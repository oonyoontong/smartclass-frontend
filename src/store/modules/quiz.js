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
  },
  saveQuestion(state, {questionNumber, response}) {
    state.quizContent.questions[questionNumber - 1].response = response
    console.log("QUESTION SAVED", state.quizContent)
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
  },
  saveQuestion({state, rootState, commit}, {questionNumber, response, questionId}) {
    commit('saveQuestion', {questionNumber, response})
    const studentId = localStorage.token
    console.log("STUDENTID:", studentId)
    console.log("RESPONSE:", response)
    return axios.put(rootState.backendUrl + 'question/update', {
      questionId,
      response,
      studentId: studentId
    })
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
