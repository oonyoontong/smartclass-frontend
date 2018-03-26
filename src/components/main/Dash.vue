<template>
  <div id="dashboard-page">
    <headerbar class="headerbar"/>
    <sidebar class="sidebar"/>
    <!--<div class="sidebar">sidebar</div>-->
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
    components: {
      Headerbar,
      Sidebar,
      Rightbar
    }
  }
</script>

<style scoped>
  #dashboard-page {
    display: grid;
    grid-template-areas:
      "header header header"
      "nav content right";
    grid-template-columns: 3% 1fr 20%;
    grid-template-rows: 8% 1fr auto;
    grid-gap: 0;
    height: 100vh;
  }

  .headerbar {
    grid-area: header;
  }

  .sidebar {
    grid-area: nav;
    background: darkred;
  }

  .rightbar {
    grid-area: right;
    background: gray;
  }

  #main-content-wrapper {
    grid-area: content;
    background: black;
  }

  @media (max-width: 768px) {
    #dashboard-page {
      grid-template-areas:
        "header"
        "nav"
        "content"
        "side"
        "footer";

      grid-template-columns: 1fr;
      grid-template-rows:
        auto /* Header */
        minmax(75px, auto) /* Nav */
        1fr /* Content */
        minmax(75px, auto) /* Sidebar */
        auto; /* Footer */
    }

    .sidebar, .rightbar {
      margin: 0;
    }
  }

  @font-face {
    font-family: 'Titillium Web';
    font-style: normal;
    font-weight: 300;
    src: local('Titillium WebLight'), local('TitilliumWeb-Light'), url(http://themes.googleusercontent.com/static/fonts/titilliumweb/v2/anMUvcNT0H1YN4FII8wpr24bNCNEoFTpS2BTjF6FB5E.woff) format('woff');
  }

</style>
