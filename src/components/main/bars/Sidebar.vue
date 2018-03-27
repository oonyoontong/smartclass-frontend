<template>
  <nav class="sidebar-nav" role="navigation">
    <ul>
      <li class="dropdown">
        <router-link to="/courses">
          <i class="fas fa-list fa-2x"></i>
          <span class="nav-text">
              Courses
          </span>
        </router-link>
        <ul class="dropdown-menu" id="course-list" role="menu">
          <!-- TODO: Create course links programmatically -->
          <li v-for="name in $store.state.registeredCourses">
            <router-link to="/courses/50.003">
              <span class="nav-text">{{name}}</span>
            </router-link>
          </li>
        </ul>
      </li>

      <li>
        <router-link to="/quiz">
          <i class="fas fa-pencil-alt fa-2x"></i>
          <span class="nav-text">
                Quiz
          </span>
        </router-link>
      </li>

      <li>
        <router-link to="/announcements">
          <i class="fas fa-bullhorn fa-2x"></i>
          <span class="nav-text">
                Announcements
          </span>
        </router-link>
      </li>

      <li>
        <router-link to="/stats">
          <i class="fas fa-chart-bar fa-2x"></i>
          <span class="nav-text">
              Graphs and Statistics
          </span>
        </router-link>
      </li>

      <li>
        <router-link to="/calendar">
          <i class="fas fa-calendar fa-2x"></i>
          <span class="nav-text">
              Calendar
          </span>
        </router-link>
      </li>

      <li>
        <router-link to="/settings/profile">
          <i class="fas fa-user fa-2x"></i>
          <span class="nav-text">
              Profile
          </span>
        </router-link>
      </li>

      <li>
        <router-link to="/settings">
          <i class="fas fa-cog fa-2x"></i>
          <span class="nav-text">
              Settings
          </span>
        </router-link>
      </li>
      <li>
        <button v-on:click="$store.dispatch('getRegisteredCourses')">
          Get Courses
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    methods: {
      getCourseList() {
      }
    },
    name: 'Sidebar',
    props: {},
    // beforeCreate: this.$store.dispatch('getRegisteredCourses')
  }
</script>

<style scoped>
  /*SIDEBAR STYLING*/
  @import url(https://fonts.googleapis.com/css?family=Titillium+Web:300);

  .sidebar-nav {
    background: #212121;
    overflow: hidden;
    -webkit-transition: width 0.2s ease-in-out;
    transition: width 0.2s ease-in-out;
    width: 3%;
    min-width: 60px;
    -webkit-transform: translateZ(0) scale(1, 1);
    z-index: 100;
  }

  .sidebar-nav > ul {
    display: table;
    padding: 0;
    margin: 25px 0;
    font-size: 14px;
    width: 250px;
  }

  .sidebar-nav li {
    display: block;
    transition: all .2s ease-in-out;
    width: 250px;
  }

  .sidebar-nav li > a {
    display: table;
    border-spacing: 0;
    color: #999;
    -webkit-transform: translateZ(0) scale(1, 1);
  }

  .sidebar-nav .nav-text {
    font-family: 'Titillium Web', sans-serif;
    display: table-cell;
    vertical-align: middle;
  }

  .sidebar-nav:hover {
    width: 250px;
    /*overflow: visible;*/
  }

  .sidebar-nav li > a:hover{
    color: #fff;
    background-color: #5fa2db;
  }

  .dropdown-menu {
    width: 100%;
    margin-top: 0;
    border: 0;
    background: #212121;
  }

  .dropdown-menu li {
    position: relative;
    display: block;
    width: 250px;
  }

  .dropdown-menu li > a {
    position: relative;
    display: table;
    border-collapse: collapse;
    border-spacing: 0;
    color: #999;
    font-family: arial, sans-serif;
    font-size: 14px;
    text-decoration: none;
    -webkit-transform: translateZ(0) scale(1, 1);
    -webkit-transition: all .1s linear;
    transition: all .1s linear;
    text-align: center;
  }

  .dropdown:hover .dropdown-menu {
    display: block;
  }

  nav {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
  }

</style>
