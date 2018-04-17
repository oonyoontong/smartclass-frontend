<template>
  <nav id="sidebar" class="sidebar-nav" role="navigation" :class="{expanded: sidebarHover}"
       v-on:mouseover='setHover(true)' v-on:mouseleave='setHover(false)'>
    <ul>
      <li>
        <sidebar-item :icon='"fa-list"' :text='"Courses"' :url='""' :sidebar-hover='sidebarHover' :sub-items='courses'/>
      </li>

      <li>
        <sidebar-item :icon='"fa-bullhorn"' :text='"Announcements"' :url='"/announcements"'
                      :sidebar-hover='sidebarHover'/>
      </li>

      <li>
        <sidebar-item :icon='"fa-chart-bar"' :text='"Statistics"' :url='"/stats"' :sidebar-hover='sidebarHover'/>
      </li>

      <li>
        <sidebar-item :icon='"fa-cog"' :text='"Settings"' :url='"/settings"' :sidebar-hover='sidebarHover'/>
      </li>
    </ul>
  </nav>
</template>

<script>
  import SidebarItem from "./SidebarItem"

  export default {
    name: "Sidebar",
    components: {
      SidebarItem
    },
    data() {
      return {
        sidebarHover: false
      }
    },
    computed: {
      courses: function () {
        const ret = []
        this.$store.getters.registeredCoursesAsMap.forEach(course => {
          ret.push({
            url: "/courses/" + course.courseId,
            text: course.courseName,
            id: course.courseId
          })
        })
        return ret
      }
    },
    methods: {
      setHover: function (hoverStatus) {
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
    transition: width 0.3s;
    transform: translateZ(0) scale(1, 1);
    z-index: 100;
    &.expanded {
      width: 250px;
      max-width: 30vw;
    }
    > ul {
      display: flex;
      flex-direction: column;
      padding: 0;
      margin: 0;
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
    -webkit-transition: all 0.1s linear;
    transition: all 0.1s linear;
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
