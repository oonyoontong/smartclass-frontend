import axios from "axios/index";

export default {
  getRegisteredCourses: ({commit}) => {
    axios.get("https://smartclass-backend.herokuapp.com/course/").then(response => {
      // axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
      const courses = response.data;
      commit('fetchRegisteredCourses', courses);
      console.log(courses)
    });
  }
}
