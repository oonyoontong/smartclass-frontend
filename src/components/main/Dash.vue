<template>
  <div id="dashboard-page">
    <headerbar class="headerbar"/>
    <sidebar class="sidebar"/>
    <rightbar class="rightbar"/>
    <main id="main-content-wrapper">
      <router-view/>
    </main>
  </div>
</template>

<script>
  import Sidebar from './bars/Sidebar'
  import Headerbar from './bars/Headerbar'
  import Rightbar from './bars/Rightbar'

  export default {
    name: "Dash",
    // beforeRouteEnter: console.log(store.courseList),
    computed: {
    },
    components: {
      Headerbar,
      Sidebar,
      Rightbar
    },
    beforeCreate() {
      // this.$store.dispatch('registeredCourses')
    }
  }
</script>

<style scoped>
  #dashboard-page {
    display: grid;
    grid-template-areas:
      "header header header"
      "left content right";
    grid-template-columns: minmax(110px, 5vw) auto minmax(350px, 30vw);
    grid-template-rows: minmax(60px, 8vh) auto;
    grid-gap: 0;
    height: 100vh;
  }

  .headerbar {
    position: relative;
    grid-area: header;
    z-index: 20;
  }

  .sidebar {
    position: relative;
    grid-area: left;
    z-index: 10;
  }

  .rightbar {
    position: relative;
    grid-area: right;
    z-index: 20;
  }

  #main-content-wrapper {
    box-shadow: inset -5px 0 10px 0 #EEEEEE, inset 5px 0 10px 0 #DDDDDD;
    position: relative;
    grid-area: content;
    z-index: 0;
  }

  @font-face {
    /*font-family: 'Titillium Web';*/
    font-style: normal;
    font-weight: 300;
    src: local('Titillium WebLight'), local('TitilliumWeb-Light'), url(http://themes.googleusercontent.com/static/fonts/titilliumweb/v2/anMUvcNT0H1YN4FII8wpr24bNCNEoFTpS2BTjF6FB5E.woff) format('woff');
  }
</style>

2 file changes in working directory
View changes
commit:ebad47
Instant Preview Loading
