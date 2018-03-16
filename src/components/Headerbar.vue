<template>
  <header class="navbar navbar-fixed-top navbar-expand-lg navbar-light navbar-fixed-top " id="top-nav">
    <div class="container-fluid">
      <a class="navbar-brand" href="./courses">
        <img src="../assets/app-icon.png" height="35" width="35">
        <span class="hover" style="padding-left: 10px; color: #fff;">SmartClass</span>
      </a>
      <router-link to="/logout" class="navbar-brand">
        <img src="../assets/logout-icon.png" height="25" width="25">
      </router-link>
    </div>
  </header>
</template>

<script>
  export default {
    name: "Headerbar"
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
