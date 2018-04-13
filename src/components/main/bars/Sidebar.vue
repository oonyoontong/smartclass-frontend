<template>
  <nav id="sidebar" class="sidebar-nav" role="navigation" :class="{expanded: sidebarHover}" v-on:mouseover='setHover(true)' v-on:mouseleave='setHover(false)'>
    <ul>
      <li class="dropdown">
        <router-link to="/courses">
          <i class="fas fa-list fa-2x"></i>
          <span class="nav-text">
              Courses
          </span>
        </router-link>
        <ul class="dropdown-menu" id="course-list" role="menu">
          <li v-for="course in $store.state.course.registeredCourses">
            <router-link :to="'/courses/' + course.courseId">
              <span class="nav-text" v-on:click="setActiveCourse(course.courseId)">{{course.courseName}}</span>
            </router-link>
          </li>
        </ul>
      </li>

      <li>
        <sidebar-item :icon='"fa-list"' :text='"Courses"' :redirect-url='"/courses"' :sidebar-hover='sidebarHover'
                      :sub-items='[{redirectUrl: "/courses/course1", text: "Course 1"}, {redirectUrl: "/courses/course2", text: "Course 2"}]'/>
      </li>

      <li>
        <sidebar-item :icon='"fa-pencil-alt"' :text='"Quiz"' :redirect-url='"/quiz"' :sidebar-hover='sidebarHover'/>
      </li>

      <li>
        <sidebar-item :icon='"fa-bullhorn"' :text='"Announcements"' :redirect-url='"/announcements"' :sidebar-hover='sidebarHover'/>
      </li>

      <li>
        <sidebar-item :icon='"fa-chart-bar"' :text='"Statistics"' :redirect-url='"/stats"' :sidebar-hover='sidebarHover'/>
      </li>

      <li>
        <sidebar-item :icon='"fa-cog"' :text='"Settings"' :redirect-url='"/settings"' :sidebar-hover='sidebarHover'/>
      </li>
    </ul>
  </nav>
</template>

<script>
  import SidebarItem from './SidebarItem'

  export default {
    name: 'Sidebar',
    components: {
      SidebarItem
    },
    data(){
      return {
        sidebarHover: false
      }
    },
    computed: {
    },
    methods: {
      setHover: function(hoverStatus) {
        // this.$store.commit('sidebarHover', hoverStatus)
        this.sidebarHover = hoverStatus
      }
    }
  }
</script>

<style scoped lang="scss">
  /*SIDEBAR STYLING*/
  @import url(https://fonts.googleapis.com/css?family=Titillium+Web:300);

  .sidebar-nav {
    background: #212121;
    overflow: hidden;
    width: 100%;
    min-width: 60px;
    transition: width .3s;
    transform: translateZ(0) scale(1, 1);
    z-index: 100;
    &.expanded {
      width: 250px;
      max-width: 30vw;
    }
    > ul {
      display: block;
      padding: 0;
      width: 100%;
    }
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

  nav {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
  }

</style>
