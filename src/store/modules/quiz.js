const state = {
  quizContent: [
    {
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
      ]
    }
  ]
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
  getQuizContentbyId({commit, state, rootState}, quizId) {

  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
