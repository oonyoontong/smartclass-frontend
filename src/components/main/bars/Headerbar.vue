<template>
  <header class="navbar navbar-fixed-top navbar-expand-lg" id="headerbar">
    <div class="container-fluid">
      <router-link to='/' class="navbar-brand" id="logo-container">
        <img src="../../../assets/app-icon.png" height="35" width="35" id="logo-main">
        <span class="hover" style="padding-left: 10px; color: #fff;">Smart Class</span>
      </router-link>

      <router-link to="/admin" class="navbar-brand">
        <span class="hover" style="padding-left: 10px; color: #fff;">Admin</span>
      </router-link>

      <a href="/" v-on:click="redirectLogout" class="navbar-brand">
        <i class="fas fa-power-off fa-lg" id="logout-icon" title="Logout"></i>
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
  #headerbar {
    background: #212121;
    font-family: "Roboto", sans-serif;
  }

  #logo-container {
    filter: brightness(0) invert(.5);
    transition: filter 0.25s ease-in-out;
  }

  #logo-container:hover {
    filter: brightness(0) invert(.7);
  }

  #logout-icon {
    filter: brightness(0) invert(.6);
    transition: filter 0.25s ease-in-out;
  }

  #logout-icon:hover {
    filter: brightness(0) invert(.9);
  }
</style>
