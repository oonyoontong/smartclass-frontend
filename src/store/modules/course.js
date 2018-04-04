import axios from 'axios';

axios.interceptors.request.use(request => {
  console.log('Sending request: ', request)
  return request
})

const state = {
  registeredCourses: [],
  visibleLectures: [
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
  registeredCourses: (state, courseList) => {
    state.registeredCourses = courseList
  },
  visibleLectures: (state, visibleLectures) => {
    state.visibleLectures = visibleLectures
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
  visibleLectures: ({commit, state}, courseId) => {
    const lectureIds = state.registeredCourses.filter(
      course => course.courseId === courseId)
    console.log('Filtered course: ', lectureIds)
    commit('visibleLectures', lectureIds)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
