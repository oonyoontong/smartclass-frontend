<template>
  <div class="quiz-wrapper">
    <h3 v-if="quizId">
      Quiz for Lecture "{{lectureId}}"
    </h3>
    <div class="question-container" v-if="quizLoaded">
      <span>{{question.questionName}}</span>
      <div class="question-options">
        <div class="question-container" v-for="(choice, index) in question.choices">
          <input type="radio" >{{choice}}
        </div>
      </div>
      <span class="btn btn-warning" v-if="questionNumber > 1" v-on:click="previousQuestion()">Previous Question</span>
      <span class="btn btn-primary" v-if="questionNumber !== numQuestions" v-on:click="nextQuestion()">Next Question</span>
      <span class="btn btn-success" v-else v-on:click="">Submit Quiz</span>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: "quiz-view",
    data() {
      return {
        questionNumber: 1
      }
    },
    props: [
      'courseId',
      'lectureId',
      'quizId'
    ],
    computed: {
      ...mapGetters({
        coursesLoaded: 'coursesLoaded',
        quizLoaded: 'quizLoaded'
      }),
      question: function () {
        return this.$store.state.quiz.quizContent.questions[this.questionNumber - 1];
      },
      questions: function () {
        return this.$store.state.quiz.quizContent.questions
      },
      numQuestions: function () {
        return this.$store.state.quiz.quizContent.numQuestions
      }
    },
    watch: {
      coursesLoaded(isLoaded) {
        this.$store.dispatch('quizContent', this.quizId).then(res => {
          console.log(this.$store.state.quiz.quizContent)
        })
      }
    },
    created() {
      if (this.coursesLoaded) {
        this.$store.dispatch('quizContent', this.quizId)
      }
    },
    methods: {
      updateQuestions() {
      },
      nextQuestion() {
        if (this.quizLoaded) {
          if (this.questionNumber < this.numQuestions) {
            this.questionNumber += 1
          }
        }
      },
      previousQuestion() {
        if (this.quizLoaded) {
          if (this.questionNumber > 1) {
            this.questionNumber -= 1
          }
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .question-options {
    list-style-type: none;
  }
</style>
