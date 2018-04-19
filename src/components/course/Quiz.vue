<template>
  <div class="quiz-wrapper">
    <h3 v-if="quizId">
      Quiz id: {{quizId}}
    </h3>
    <div class="question-container">
      <span></span>
      <ul class="question-options">
        <li v-for="choice in question.choices">{{choice}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "quiz-view",
    data(){
      return {
        questionNumber: 1
      }
    },
    props: [
      'courseId',
      'lectureId',
      'quiz'
    ],
    computed: {
      question: function(){
        const q = this.$store.getters.questionNumber(this.questionNumber);
        console.log(q)
        return q
      }
    },
    created(){
      this.$store.dispatch('quizContent', this.quizId)
    },
    methods: {
      updateQuestions(){
      }
    },
    beforeDestroy(){
      // TODO: save quiz somehow?
    }
  }
</script>

<style scoped>

</style>
