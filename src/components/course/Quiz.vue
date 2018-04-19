<template>
  <div id="dashboard">
    <h3 v-if="quizId">
      Quiz id: {{quizId}}
    </h3>
  </div>
</template>

<script>
  export default {
    name: "quiz-view",
    components: {
    },
    props: [
      'quizId'
    ],
    created(){
      console.log(this.quizId)
    }
  }
</script>

<style scoped>

</style>
