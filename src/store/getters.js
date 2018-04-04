export default {
  courseNameFromId(state, courseId){
    return state.registeredCourses.filter(item => item.courseId === courseId)[0]
  }
}
