<template>
  <div>
    <h1>Lecture ID: {{lectureId}}</h1>
    <button v-on:click.prevent="$store.dispatch('liveQuestions', lectureId)">Update Live</button>
  </div>
</template>

<script>
  export default {
    name: "lecture",
    props: [
      'lectureId'
    ]
  }
</script>

<style scoped>

</style>
