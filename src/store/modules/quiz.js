import axios from 'axios';

const state = {
  quizContent: {},
  activeQuiz: null
}

const getters = {
  questionNumber(state) {
      return function(number) {
        if(number > 0){
          return state.quizContent.questions[number-1]
        }
        else{
          console.log("INVALID QUESTION NUMBER, MUST BE >0")
        }
      }
  },
  question(state) {
    return state.quizContent.question
  }
}

const mutations = {
  quizContent(state, quizContent) {
    state.quizContent = quizContent
  },
  activeQuiz(state, payload) {
    state.activeQuiz = payload
  }
}

const actions = {
  async quizContent({commit, state, rootState}, quizId) {
    console.log("Getting Quiz:", quizId)
    return axios.post(rootState.backendUrl + 'quiz', {quiz: quizId})
      .then(response => {
        commit('quizContent', response.data)
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
