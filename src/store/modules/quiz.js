const state = {
  quizContent: []
}

const getters = {
  questionNumber(state, number) {
    return state.quizContent[number]
  }
}

const mutations = {
  setQuizContent(state, newQuizContent) {
    state.quizContent = newQuizContent
  }
}

const actions = {
  getQuizContentById: ({commit, state, rootState}, quizId) => {
    // TODO: replace with axios/getQuizById
    const quizContent = {
      number: 1,
      type: "mcq",
      questionTitle: "Important question",
      questionText: "What does TD in SUTD stand for?",
      options: [
        "Technology Design",
        "Technology and Design",
        "It's a trick question",
        "Technical Difficulties",
        "Why do I have to answer this wtf"
      ],
      response: null  // create this property locally
    }
    commit('setQuizContent', quizContent)
  },
  submitQuestion: ({commit, state, rootState}, {number, response}) => {

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
