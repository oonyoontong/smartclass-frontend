<template>
  <div id="notFound">
    <h1>You are lost.</h1>
    <h4>This page doesn't exist.</h4>
    <router-link to="/">I want to go home.</router-link>
  </div>
</template>

<script>
    export default {
        name: "NotFound"
    }
</script>

<style scoped>
  #notFound {
    background: #111;
    padding: 10em;
    height: 100vh;
    color: #BBB;
  }
</style>
