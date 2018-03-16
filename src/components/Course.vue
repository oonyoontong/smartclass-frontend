<template>
  <div id="course-name-div">
    {{$route.params.courseID}}
  </div>
</template>

<script>
  //TODO: PULL COURSES FROM SERVER, SORT BY QUERY

  export default {
    name: "course-view",
    props: [
      'lectureInput'
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

  #course-name-div {
    margin-top: 300px;
  }

</style>
