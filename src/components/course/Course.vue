<template xmlns:v-if="http://www.w3.org/1999/xhtml">
  <div id="courses">
    <div id="courses-content">
      <ul class="preview-container">
        <li v-for="preview in $store.state.course.visiblePreviews" class="lecture-preview-item">
          <item-preview :previewInfo=preview />
        </li>
      </ul>
      <!--<button v-on:click.prevent="updateLectures">Fetch lectures</button>-->
      <h1>Course id: {{courseId}}</h1>
    </div>
  </div>
</template>

<script>
  //TODO: PULL LECTURES FROM SERVER, SORT BY QUERY
  import ItemPreview from './CourseItemPreview'
  import Lecture from './Lecture'

  export default {
    name: "course-view",
    components: {
      ItemPreview,
      Lecture
    },
    props: [
      'courseId'
    ],
    computed: {
      activeCourse: function () {
        return this.$store.state.course.activeCourse
      },
      coursesLoaded: function () {
        return this.$store.state.course.coursesLoaded
      }
    },
    watch: {
      activeCourse(courseId) {
        this.updateLectures(courseId)
      },
    },
    mounted() {
      this.updateLectures(this.courseId)
      this.updateActiveCourse()
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        setTimeout(() => {
          next()
        }, 1000)
      })
    },
    beforeRouteUpdate(to, from, next) {
      console.log("UPDATING")
      next()
    },
    methods: {
      updateLectures: function (courseId) {
        this.$store.dispatch('visiblePreviews', courseId)
      },
      updateActiveCourse: function () {
        if (this.courseId) {
          this.$store.commit('activeCourse', this.courseId)
        }
      },
      checkCoursesLoaded: (to, from, next) => {
        if(this.coursesLoaded){
          console.log("LOADED")
        }
        else {
          console.log("LOADED")
        }
      }
    },
  }
</script>

<style scoped>
  #courses {
    margin: 50px;
  }

  .preview-container {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    list-style: none;
    flex-flow: wrap;
    align-content: space-around;
  }

  .lecture-preview-item {
    margin-right: 60px;
    margin-bottom: 60px;
    box-shadow: 3px 5px 3px 0 #EEEEEE;
  }

</style>
