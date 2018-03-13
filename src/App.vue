<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>

import auth from './auth'



export default {
    data () {
        return {
            loggedIn: auth.loggedIn()
        }
    },
    created () {
        auth.onChange = loggedIn => {
            this.loggedIn = loggedIn
        }
    }
}
</script>

<style>
#app {
    @import url(https://fonts.googleapis.com/css?family=Roboto+Mono&subset=cyrillic);
    font-family: 'Roboto';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
