<template xmlns:v-if="http://www.w3.org/1999/xhtml">
  <div id="courses">
    <h1>
      Courses
    </h1>
    <span v-if="$route.params.courseId">
    Course ID: {{$route.params.courseId}}
    </span>
  </div>
</template>

<script>
  //TODO: PULL COURSES FROM SERVER, SORT BY QUERY

  export default {
    name: "course-view",
    props: [
      'lectureInput',
      'courseInput'
    ],
    methods: {
      lectureQuery: function () {
        this.$router.replace({
            path: 'lecture',
            query: {
              q: this.lectureInput
            }
          }
        )
      }
    }
  }
</script>

<style scoped>

</style>
