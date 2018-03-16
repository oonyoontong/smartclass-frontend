<template>
  <div id="courses">
    <h1>
      Courses
    </h1>
    <p>
    Course ID: {{$route.params.courseId}}
    </p>

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
        console.log("wtfwtf");
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
