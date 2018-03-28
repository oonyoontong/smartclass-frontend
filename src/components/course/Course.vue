<template xmlns:v-if="http://www.w3.org/1999/xhtml">
  <div id="courses">
    <div id="courses-content">
      <ul class="lecture-preview-container">
        <li v-for="lecture in $store.state.visibleLectures" class="lecture-preview-item">
          <lecture :lectureInfo=lecture></lecture>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  //TODO: PULL LECTURES FROM SERVER, SORT BY QUERY
  import LecturePreview from './LecturePreview'

  export default {
    name: "course-view",
    components: {
      Lecture: LecturePreview
    },
    props: [
      'courseId'
    ],
    beforeUpdate() {
      this.$store.dispatch('updateVisibleLectures', this.props)
    },
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
  #courses {
  }

  .lecture-preview-container {
    display: flex;
    flex-direction: row;

  }

  .lecture-preview-container > li {
    display: block;
  }

</style>
