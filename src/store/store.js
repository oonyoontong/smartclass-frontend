import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  state: {
    backendUrl: "https://smartclass-backend.herokuapp.com/",
    isPlatformMobile: false,
    username: null,
    registeredCourses: [],
    visibleLectures: [
      {
        id: 1,
        name: "introduction"
      },
      {
        id: 2,
        name: "cohort 1"
      },
      {
        id: 3,
        name: "cohort 2"
      }
    ]
  },
  getters: {
    courseNameFromId(state, courseId) {
      return state.registeredCourses.filter(item => item.courseId === courseId)[0]
    }
  },
  mutations: {
    fetchRegisteredCourses: (state, courseList) => {
      state.registeredCourses = courseList
    },
    setVisibleLectures: (state, visibleLectureList) => {
      state.visibleLectures = visibleLectureList
    }
  },
  actions: {
    getRegisteredCourses: ({commit, state}) => {
      // axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
      axios.get(state.backendUrl + 'course').then(response => {
        const courses = response.data;
        commit('fetchRegisteredCourses', courses);
        console.log("Fetched " + courses.length + " courses:")
        console.log(courses)
      });
    },
    updateVisibleLectures: ({commit, state}, courseId) => {
      const lectureIds = state.registeredCourses.filter(
        course => course.courseId === courseId)
      console.log(lectureIds)
    }
  }
})
