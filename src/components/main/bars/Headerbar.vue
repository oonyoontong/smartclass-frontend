<template>
  <header class="navbar navbar-fixed-top navbar-expand-lg navbar-light navbar-fixed-top " id="top-nav">
    <div class="container-fluid">
      <router-link to='/' class="navbar-brand">
        <img src="../../../assets/app-icon.png" height="35" width="35">
        <span class="hover" style="padding-left: 10px; color: #fff;">SmartClass</span>
      </router-link>
      <a href="/" v-on:click="redirectLogout" class="navbar-brand">
        <img src="../../../assets/logout-icon.png" height="25" width="25">
      </a>
    </div>
  </header>
</template>

<script>
  import auth from '@/scripts/auth'

  export default {
    name: "Headerbar",
    methods: {
      redirectLogout: function () {
        this.$router.push('/logout');
      }
    },
    data() {
      return {
        loggedIn: auth.loggedIn()
      }
    },
    created() {
      auth.onChange = loggedIn => {
        this.loggedIn = loggedIn
      }
    }
  }
</script>

<style scoped>
  #top-nav {
    top: 0;
    background-color: #31A9C1;
    height: 8%;
    width: 100%;
    font-family: "Roboto", sans-serif;
    position: fixed;
  }
</style>
