import axios from 'axios';
import lecture from "./lecture";

axios.interceptors.request.use(request => {
  // console.log('Sending request: ', request)
  return request
})

const state = {
  defaultPreviewImageUrl: "http://www.raisedeyebrow.com/sites/www.raisedeyebrow.com/files/blog/2012/01/fff.png",
  registeredCourses: {},
  coursesLoaded: false,
  activeCourse: "all",
  visiblePreviews: []
}

const getters = {
  courseIdFromUniqueId(state, getters) {
    const courseMap = getters.registeredCoursesAsMap
    const ret = {}
    courseMap.forEach(course => {
      ret[course._id] = course.courseId
    })
    return ret
  },
  registeredCoursesAsMap(state) {
    const courseMap = new Map()
    Object.keys(state.registeredCourses).forEach(key => {
      courseMap.set(key, state.registeredCourses[key])
    })
    return courseMap
  },
  coursesLoaded(state){
    return state.coursesLoaded
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
  },
  coursesLoaded: (state) => {
    state.coursesLoaded = true
  }
}

const actions = {
  async registeredCourses({commit, state, rootState, getters}) {
    return axios.get(rootState.backendUrl + 'course')
      .then(response => {
        const courses = response.data.reduce((result, course) => {
          result[course._id] = course
          return result
        }, {})
        commit('registeredCourses', courses)
        return axios.get(rootState.backendUrl + 'lecture')
          .then(response => {
            const allLectures = response.data
            allLectures.forEach(lecture => {
              const course = state.registeredCourses[lecture.courseId]
              if (course.lectures instanceof Array) {
                course.lectures = {}
              }
              course.lectures[lecture._id] = lecture
            });
            commit('coursesLoaded')
            console.log("Fetched courses:", courses)
          })
          .catch(response => {
            console.log("ERROR: ", response)
          })
      })
      .catch(response => {
        console.log("ERROR: ", response)
      })
  },
  async visiblePreviews({dispatch, commit, state, getters, rootState}, courseId = "all") {
    if (!state.coursesLoaded) await dispatch('registeredCourses')

    if (courseId !== "all") {
      const localLectures = state.registeredCourses[courseId].lectures
      const localLectureMap = new Map()

      Object.keys(localLectures).forEach(key => {
        localLectureMap.set(key, localLectures[key])
      })
      const localLectureList = Array.from(localLectureMap.values())

      // const lectures = response.data.lectures
      localLectureList.forEach(lecture => {
        if (!lecture.previewImageUrl) lecture.previewImageUrl = state.defaultPreviewImageUrl
      })
      console.log('Fetched ' + localLectureList.length + ' lectures: ', localLectureList)
      commit('visiblePreviews', localLectureList)
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
