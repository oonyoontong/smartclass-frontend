import axios from 'axios';

axios.interceptors.request.use(request => {
  console.log('Sending request: ', request)
  return request
})

const state = {
  defaultPreviewImageUrl: "http://www.raisedeyebrow.com/sites/www.raisedeyebrow.com/files/blog/2012/01/fff.png",
  registeredCourses: [],
  coursesLoaded: false,
  activeCourse: "all",
  visiblePreviews: [
    {
      courseId: "5ac3e2f453768d1d4c0330c3",
      _id: "5acidjs89ds7fg6tnrgjn",
      type: 'lecture',
      name: "introduction",
      previewImageUrl: "http://www.raisedeyebrow.com/sites/www.raisedeyebrow.com/files/blog/2012/01/fff.png"
    },
    {
      courseId: "5ac3e2f453768d1d4c0330c3",
      _id: "5acidjs234h34h2tn5rgjn",
      type: 'quiz',
      name: "quiz 1",
      previewImageUrl: "http://www.raisedeyebrow.com/sites/www.raisedeyebrow.com/files/blog/2012/01/fff.png"
    },
    {
      courseId: "5ac3e2f453768d1d4c0330c3",
      _id: "5acidjs87ewhfy8htnrgjn",
      type: 'lecture',
      name: "cohort 1",
      previewImageUrl: "http://www.raisedeyebrow.com/sites/www.raisedeyebrow.com/files/blog/2012/01/fff.png"
    },
    {
      courseId: "5ac3e2f453768d1d4c0330c3",
      _id: "5acidjsauhgwasdasdsdaan",
      type: 'quiz',
      name: "quiz 2",
      previewImageUrl: "http://www.raisedeyebrow.com/sites/www.raisedeyebrow.com/files/blog/2012/01/fff.png"
    },
    {
      courseId: "5ac3e2f453768d1d4c0330c3",
      _id: "5acidjsa98dws7yf65asdas",
      type: 'lecture',
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
  },
  activeCourse: (state, payload) => {
    state.activeCourse = payload
  }
}

const actions = {
  async registeredCourses ({commit, state, rootState}) {
    return axios.get(rootState.backendUrl + 'course')
      .then(response => {
        const courses = response.data
        commit('registeredCourses', courses)
        console.log("Fetched " + courses.length + " courses:", courses)
        state.coursesLoaded = true
      })
  },
  // TODO: grab all lectures on page load
  async visiblePreviews ({dispatch, commit, state, rootState}, courseId) {
    if(!state.coursesLoaded) await dispatch('registeredCourses')
    const id = state.registeredCourses.find(item => {
      if (item.courseId === courseId) return item._id
    })
    return axios.post(rootState.backendUrl + 'lecture', {
      'courseId': id
    })
      .then(response => {
        const lectures = response.data.lectures
        lectures.forEach(item => {
          item.name = item.lectureName
          delete item.lectureName
          if (!item.previewImageUrl) item.previewImageUrl = state.defaultPreviewImageUrl
          return item
        })
        console.log('Fetched ' + lectures.length + ' lectures: ', lectures)
        commit('visiblePreviews', lectures)
      })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
