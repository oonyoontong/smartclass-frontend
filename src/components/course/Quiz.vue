<template>
  <div id="dashboard">
    <h1 v-if="quizId">
      Quiz id: {{quizId}}
    </h1>
  </div>
</template>

<script>
  export default {
    name: "quiz-view",
    components: {
    },
    props: [
      'quizId'
    ]
  }
</script>

<style scoped>

</style>
