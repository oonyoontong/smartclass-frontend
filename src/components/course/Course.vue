<template xmlns:v-if="http://www.w3.org/1999/xhtml">
  <div id="courses">
    <div id="courses-content">
      <ul class="preview-container">
        <li v-for="preview in $store.state.course.visiblePreviews" class="lecture-preview-item">
          <item-preview :previewInfo=preview />
        </li>
      </ul>
      <button v-on:click.prevent="updateLectures">Fetch lectures</button>
      <span>TODO: Move method from button to hook</span>
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
      'courseId',
      'lectureId'
    ],
     mounted() {
      this.$store.dispatch('visiblePreviews', this.courseId)
    },
    methods: {
      updateLectures: function () {
        this.$store.dispatch('visiblePreviews', this.courseId)
      }
    }
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
