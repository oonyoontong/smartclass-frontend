<template xmlns:v-if="http://www.w3.org/1999/xhtml">
  <div id="courses">
    <div id="courses-content">
      <ul class="preview-container">
        <li v-for="preview in visiblePreviews" class="lecture-preview-item">
          <item-preview :previewInfo=preview />
        </li>
      </ul>
      <h1>Course id: {{courseId}}</h1>
    </div>
  </div>
</template>

<script>
  //TODO: PULL LECTURES FROM SERVER, SORT BY QUERY
  import {store} from '@/store/index'
  import ItemPreview from './CourseItemPreview'
  import Lecture from './Lecture'

  export default {
    name: "course-view",
    components: {
      ItemPreview,
      Lecture
    },
    data() {
      return {}
    },
    props: [
      'courseId'
    ],
    computed: {
      activeCourse: function () {
        return this.$route.params.courseId
      },
      visiblePreviews: function () {
        return this.$store.state.course.visiblePreviews
      },
      coursesLoaded: function () {
        return this.$store.state.course.coursesLoaded
      }
    },
    created() {
      console.log(this.courseId)
      this.$store.dispatch('visiblePreviews', this.courseId)
    },
    beforeRouteEnter(to, from, next) {
      store.dispatch('visiblePreviews', to.params.courseId).then(response => {
        next()
      })
    },
    beforeRouteUpdate(to, from, next) {
      console.log("UPDATING ROUTE")
      this.$store.dispatch('visiblePreviews', to.params.courseId).then(response => {
        next()
      })
    },
    methods: {
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
