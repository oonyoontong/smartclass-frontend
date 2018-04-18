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
    console.log("SETTING ACTIVE COURSE TO: ", payload)
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
          result[course.courseId] = course
          return result
        }, {})
        commit('registeredCourses', courses)
        return axios.get(rootState.backendUrl + 'lecture')
          .then(response => {
            const allLectures = response.data
            allLectures.forEach(lecture => {
              const course = state.registeredCourses[getters.courseIdFromUniqueId[lecture.courseId]]
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
  async visiblePreviews({dispatch, commit, state, getters, rootState}) {
    // if (!state.coursesLoaded) await dispatch('registeredCourses')
    if (state.activeCourse !== "all") {
      const localLectures = state.registeredCourses[state.activeCourse].lectures
      const localLectureMap = new Map()
      Object.keys(localLectures).forEach(key => {
        localLectureMap.set(key, localLectures[key])
      })
      const localLectureList = Array.from(localLectureMap.values())
      localLectureList.forEach(lecture => {
        lecture.name = lecture.lectureName
        delete lecture.lectureName
        if (!lecture.previewImageUrl) lecture.previewImageUrl = state.defaultPreviewImageUrl
      })
      console.log('Fetched ' + localLectureList.length + ' lectures: ', localLectureList)
      commit('visiblePreviews', localLectureList)
    }
    else {
      console.log("ACTIVE COURSES IS ALL")
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
