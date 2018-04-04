import axios from 'axios';

axios.interceptors.request.use(request => {
  console.log('Sending request: ', request)
  return request
})

const state = {
  defaultPreviewImageUrl: "http://www.raisedeyebrow.com/sites/www.raisedeyebrow.com/files/blog/2012/01/fff.png",
  registeredCourses: [],
  visiblePreviews: [
    {
      id: 1,
      name: "introduction",
      previewImageUrl: "http://www.raisedeyebrow.com/sites/www.raisedeyebrow.com/files/blog/2012/01/fff.png"
    },
    {
      id: 2,
      name: "cohort 1",
      previewImageUrl: "http://www.raisedeyebrow.com/sites/www.raisedeyebrow.com/files/blog/2012/01/fff.png"
    },
    {
      id: 3,
      name: "cohort 2",
      previewImageUrl: "http://www.raisedeyebrow.com/sites/www.raisedeyebrow.com/files/blog/2012/01/fff.png"
    }
  ]
}

const getters = {
  courseNameFromId(state, courseId) {
    return state.registeredCourses.filter(item => item.courseId === courseId)[0]
  }
}

const mutations = {
  registeredCourses: (state, payload) => {
    state.registeredCourses = payload
  },
  visiblePreviews: (state, payload) => {
    state.visiblePreviews = payload
  }
}

const actions = {
  registeredCourses: ({commit, state, rootState}) => {
    // axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
    axios.get(rootState.backendUrl + 'course')
      .then(response => {
        const courses = response.data
        commit('registeredCourses', courses)
        console.log("Fetched " + courses.length + " courses:", courses)
      })
      .catch(error => {
        console.log(error.response)
      })
  },
  visiblePreviews: ({commit, state, rootState}, courseId) => {
    const id = state.registeredCourses.find(item => {
      if (item.courseId === courseId) return item._id
    })
    axios.post(rootState.backendUrl + 'lecture', {
        'courseId': id
      })
      .then(response => {
        const lectures = response.data.lectures
        lectures.forEach(item => {
          item.name = item.lectureName
          delete item.lectureName

          if(!item.previewImageUrl) item.previewImageUrl = state.defaultPreviewImageUrl

          return item
        })
        console.log('Fetched ' + lectures.length + ' lectures: ', response.data)
        commit('visiblePreviews', lectures)
      })
    //
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
