<template>
  <nav class="sidebar-nav" role="navigation">
    <ul>
      <li class="dropdown" id="courses-dropdown">
        <router-link to="/courses">
          <i class="fas fa-list fa-2x "></i>
          <span class="nav-text">
              Courses
          </span>
        </router-link>
        <ul class="dropdown-menu" id="course-list" role="menu">
          <!-- TODO: Create course links programmatically -->
          <li>
            <router-link to="/courses/50.003">
              <span class="nav-text">50.003</span>
            </router-link>
          </li>
          <li>
            <router-link to="/courses/50.005">
              <span class="nav-text">50.034</span>
            </router-link>
          </li>
          <li>
            <router-link to="/courses/50.034">
              <span class="nav-text">50.034</span>
            </router-link>
          </li>
        </ul>
      </li>

      <li class="has-subnav">
        <router-link to="/quiz">
          <i class="fas fa-pencil-alt fa-2x"></i>
          <span class="nav-text">
                Quiz
          </span>
        </router-link>
      </li>

      <li class="has-subnav">
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
    </ul>

  </nav>
</template>

<script>
  import axios from 'axios';

  export default {
    methods: {
      getCourseList () {
        var courses = axios.get("https://smartclass-backend.herokuapp.com/course/")
          .then(function (response) {
            var courses = response.data;
            console.log(courses);
            for (var i = 0; i < courses.length; i++) {
              console.log(courses[i].courseName);
              createElement('li');
            }
          });
      }
    },
    name: 'SidebarMenu',
    props:{
    },
    beforeCreate: this.getCourseList
  }
</script>

<style scoped>
  /*SIDEBAR STYLING*/
  @import url(https://fonts.googleapis.com/css?family=Titillium+Web:300);

  .fa-2x {
    font-size: 2em;
  }

  .fas {
    position: relative;
    display: table-cell;
    width: 60px;
    height: 60px;
    text-align: center;
    vertical-align: middle;
    font-size: 20px;
  }

  .sidebar-nav:hover, nav.sidebar-nav.expanded {
    width: 250px;
    overflow: visible;
  }

  .dropdown:hover .dropdown-menu {
    display: block;
  }

  .dropdown-menu {
    position: static;
    float: none;
    width: 100%;
    margin-top: 0;
    border: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
    background: #212121;
    border-right: 1px solid #e5e5e5;
  }

  /*.dropdown-menu>ul {
      margin:7px 0;
  }*/

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

  .sidebar-nav {
    background: #212121;
    border-right: 1px solid #e5e5e5;
    left: 0;
    bottom: 0;
    height: 92%;
    width: 60px;
    overflow: hidden;
    -webkit-transition: width .05s linear;
    transition: width .05s linear;
    -webkit-transform: translateZ(0) scale(1, 1);
    z-index: 1000;
    position: fixed;
  }

  .sidebar-nav > ul {
    margin: 7px 0;
  }

  .sidebar-nav li {
    position: relative;
    display: block;
    width: 250px;
  }

  .sidebar-nav li > a {
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
  }

  .sidebar-nav .nav-icon {
    position: relative;
    display: table-cell;
    width: 60px;
    height: 60px;
    text-align: center;
    vertical-align: middle;
    font-size: 18px;
  }

  .sidebar-nav .nav-text {
    position: relative;
    display: table-cell;
    vertical-align: middle;
    width: 190px;
    font-family: 'Titillium Web', sans-serif;
  }

  .sidebar-nav > ul.logout {
    position: absolute;
    left: 0;
    bottom: 0;
  }

  .no-touch .scrollable.hover {
    overflow-y: hidden;
  }

  .no-touch .scrollable.hover:hover {
    overflow: visible;
  }

  a:hover, a:focus {
    text-decoration: none;
  }

  nav {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
  }

  nav ul, nav li {
    outline: 0;
    margin: 0;
    padding: 0;
  }

  .sidebar-nav li:hover > a, nav.sidebar-nav li.active > a, .dropdown-menu > li > a:hover, .dropdown-menu > li > a:focus, .dropdown-menu > .active > a, .dropdown-menu > .active > a:hover, .dropdown-menu > .active > a:focus, .no-touch .dashboard-page nav.dashboard-menu ul li:hover a, .dashboard-page nav.dashboard-menu ul li.active a {
    color: #fff;
    background-color: #5fa2db;
  }

</style>
