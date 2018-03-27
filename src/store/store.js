import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  state: {
    isPlatformMobile: false,
    username: null,
    registeredCourses: []
  },
  getters: {
    courseNameFromId(state, courseId){
      return state.registeredCourses.filter(item => item.courseId === courseId)[0]
    }
  },
  mutations: {
    fetchRegisteredCourses: (state, courseList) => {
      state.registeredCourses = courseList
    }
  },
  actions: {
    getRegisteredCourses: ({commit}) => {
      axios.get("https://smartclass-backend.herokuapp.com/course/").then(response => {
      // axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
        const courses = response.data;
        commit('fetchRegisteredCourses', courses);
        console.log(courses)
      });
    }
  }
})
