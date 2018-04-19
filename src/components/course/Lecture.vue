<template>
  <div id="lecture-wrapper">
    <div id="lecture-header">
      <span>Lecture ID: {{lectureId}}</span>
      <div id="quiz-btn-group" class="btn-group">
        <button class="btn btn-primary" id="quiz-button">Go to Quiz</button>
      </div>
    </div>
    <div id="lecture-content">
      <pdf-view :lecture-url='"https://bitcoin.org/bitcoin.pdf"'></pdf-view>
    </div>
    <div id="quiz-wrapper">
      <quiz :quiz-id='this.quizId'></quiz>
    </div>
    <div id="feedback-wrapper">
      <lecture-feedback></lecture-feedback>
    </div>
  </div>
</template>

<script>
  import PdfView from './PdfView'
  import lectureFeedback from './LectureFeedback'
  import quiz from './Quiz'

  export default {
    name: "lecture",
    components: {
      PdfView,
      lectureFeedback,
      quiz
    },
    props: [
      'courseId',
      'lectureId'
    ],
    computed:{
      quizId: function() {
        return this.$store.getters.quizId
      }
    },
    created(){
      this.$store.dispatch('quizIds', {courseId: this.courseId, lectureId: this.lectureId})
    }
  }
</script>

<style scoped>
  #lecture-wrapper{
    height: 100%;
  }

  #lecture-wrapper{
    display: flex;
    flex-direction: column;
    grid-template-rows: minmax(40px, 5%) auto minmax(40px, 8%);
  }

  #lecture-header{
    /*height: 10%;*/
    max-height: 5%;
  }

  #lecture-content{
    flex: 1;
    height: 100%;
    box-shadow: inset 0 -2px 5px #DDD, inset 0 2px 5px #DDD;
  }

  #quiz-button{
    position: relative;
    float: right;
  }
</style>
