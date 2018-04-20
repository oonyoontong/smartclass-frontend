<template>
  <div id="lecture-wrapper">
    <div id="lecture-header">
      <span>Lecture ID: {{lectureId}}</span>
      <div id="quiz-btn-group" class="btn-group">
        <button class="btn btn-primary" id="quiz-button">Go to Quiz</button>

        <button
          type="button"
          class="btn"
          @click="showModal"
        >
          Feedback
        </button>
        <lecture-feedback></lecture-feedback>
      </div>
    </div>

    <div id="lecture-content">
      <pdf-view :lecture-url='"https://bitcoin.org/bitcoin.pdf"'></pdf-view>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import PdfView from './PdfView'
  import LectureFeedback from "./LectureFeedback"

  export default {
    name: "lecture",
    data(){
      return {
        isModalVisible: false
      }
    },

    components: {
      PdfView,
      LectureFeedback
    },
    props: [
      'courseId',
      'lectureId'
    ],
    computed: {
      ...mapGetters({
        coursesLoaded: 'coursesLoaded'
      }),
      quiz: function () {
        return this.$store.getters.quiz
      }
    },
    mounted(){
      if(this.coursesLoaded){
        this.getQuizzes()
      }
    },
    watch: {
      '$store.state.course.coursesLoaded'(isLoaded){
        this.getQuizzes()
      }
    },
    methods: {
      getQuizzes(){
        this.$store.dispatch('quizzes', {courseId: this.courseId, lectureId: this.lectureId})
      },showModal() {
      this.$modal.show('lecture-feedback');
    },
    closeModal() {
      this.$modal.hide('lecture-feedback');
    }
    }
  }
</script>

<style scoped>
  #lecture-wrapper {
    height: 100%;
  }

  #lecture-wrapper {
    display: flex;
    flex-direction: column;
    grid-template-rows: minmax(40px, 5%) auto minmax(40px, 8%);
  }

  #lecture-header {
    /*height: 10%;*/
    max-height: 5%;
  }

  #lecture-content {
    flex: 1;
    height: 100%;
    box-shadow: inset 0 -2px 5px #DDD, inset 0 2px 5px #DDD;
  }

  #quiz-button {
    position: relative;
    float: right;
  }
</style>
