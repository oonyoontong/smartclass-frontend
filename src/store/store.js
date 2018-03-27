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
  },
  mutations: {
    fetchRegisteredCourses: (state, courseList) => {
      state.registeredCourses = courseList
    }
  },
  actions: {
    getRegisteredCourses: ({commit}) => {
      // axios.get("https://smartclass-backend.herokuapp.com/course/").then(response => {
      axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
        const courses = response.data.map(item => {
          return item.name
        });
        commit('fetchRegisteredCourses', courses);
        console.log(courses)
        // for (var i = 0; i < courses.length; i++) {
        //   console.log(courses[i].courseName);
        // }
      });
    }
  }
})
