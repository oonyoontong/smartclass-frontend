<template>
  <div class="quiz-wrapper">
    <div class="question-container" v-if="quizLoaded">
      <h4>{{question.questionName}}</h4>
      <form class="question-options">
        <label class="question-container" v-for="(choice, index) in question.choices">
          <input type="radio" name="option" :value="index" v-model="response">{{choice}}
        </label>
        <span class="btn btn-warning" v-if="questionNumber > 1" v-on:click="previousQuestion()">Previous Question</span>
        <span class="btn btn-primary" v-if="questionNumber !== numQuestions" v-on:click="nextQuestion()">Next Question</span>
        <span class="btn btn-success" v-else v-on:click="submitQuiz()">Submit Quiz</span>
      </form>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: "quiz-view",
    data() {
      return {
        questionNumber: 1,
        response: null
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
      saveQuestion() {
        if(this.response !== null){
          this.$store.dispatch('saveQuestion', {
            questionNumber: this.questionNumber,
            questionId: this.question._id,
            response: this.response
          })
        }
      },
      nextQuestion() {
        if (this.quizLoaded) {
          if (this.questionNumber < this.numQuestions) {
            this.saveQuestion()
            this.questionNumber += 1
            this.clearResponse()
          }
        }
      },
      previousQuestion() {
        if (this.quizLoaded) {
          if (this.questionNumber > 1) {
            this.saveQuestion()
            this.questionNumber -= 1
            this.clearResponse()
          }
        }
      },
      clearResponse() {
        this.response = null
      },
      submitQuiz() {
        this.saveQuestion()
        this.$store.dispatch('submitQuiz')
      }
    }
  }
</script>

<style scoped lang="scss">
  .question-options {
    list-style-type: none;
  }
  form{
    display: flex;
    flex-direction: column;
  }
</style>
