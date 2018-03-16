<template>
  <div class="dashboard_page">
    <headerbar/>
    <sidebar/>
    <div id="content-wrapper">
      <router-view/>
    </div>
  </div>

</template>

<script>
  import Sidebar from './Sidebar'
  import Headerbar from './Headerbar'

  export default {
    name: "Dash",
    // beforeRouteEnter: console.log(store.courseList),
    components: {
      Headerbar: Headerbar,
      Sidebar: Sidebar
    }
  }
</script>

<style scoped>
  #content-wrapper {
    margin-top: 60px;
    margin-left: 60px;
    height: 2000px;
  }

  @font-face {
    font-family: 'Titillium Web';
    font-style: normal;
    font-weight: 300;
    src: local('Titillium WebLight'), local('TitilliumWeb-Light'), url(http://themes.googleusercontent.com/static/fonts/titilliumweb/v2/anMUvcNT0H1YN4FII8wpr24bNCNEoFTpS2BTjF6FB5E.woff) format('woff');
  }

</style>
