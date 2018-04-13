<template>
  <div class="nav-item" :class='{dropdown: subItems, expanded: sidebarHover}' v-on:click="toggleDropdownActive">
    <router-link :to=redirectUrl>
      <i :class='"nav-icon fas " + icon'></i>
      <span class="nav-text">{{text}}</span>
    </router-link>

    <ul class="dropdown-menu" :class='{active: dropdownActive}' role="menu" v-if="subItems">
      <li v-for="subItem in subItems">
        <router-link :to=subItem.redirectUrl>
          <span class="nav-text" v-on:click="setActiveCourse(course.courseId)">{{subItem.text}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "SidebarItem",
    props: {
      text: {
        required: true
      },
      icon: {
        required: true
      },
      redirectUrl: {
        required: false
      },
      subItems: {
        required: false
      },
      sidebarHover: {
        required: true
      }
    },
    data(){
      return {
        dropdownActive: false
      }
    },
    methods: {
      toggleDropdownActive: function() {
        this.dropdownActive = !this.dropdownActive
        console.log("Dropdown state: ", this.dropdownActive)
      },
      setActiveCourse: courseId => {
        // this.$store.commit('activeCourse', courseId)
      }
    },
    computed: {
    },
  }
</script>

<style scoped lang="scss">
  .nav-item {
    height: 90px;
    transition: all 0.5s;

    &.expanded {
      height: 70px;

      a {
        flex-direction: row;
      }

      .nav-icon {
        padding-left: 10px;
      }

      .nav-text {
        flex: 1;
        padding-left: 15px;
        text-align: left;
        font-size: 1.2em;
        /*transition: all 0.15s;*/
      }
    }

    &:hover {
      color: #111;
      background-color: #CCC;

      ul {
        border-radius: 0;
        border: 0;
        /*background: #222;*/
        display: block;
        width: 100%;

        a:hover{
          color: #FFF;
        }
      }

      > a {
        color: #111;
      }
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-decoration: none !important;
      width: 100%;
      height: 100%;
      border-spacing: 0;
      color: #CCC;
      -webkit-transform: translateZ(0) scale(1, 1);
    }

    .nav-icon {
      font-size: 1.5em;
      text-align: center;
      vertical-align: middle;
    }

    .nav-text {
      text-align: center;
      font-weight: bold;
      font-family: 'Titillium Web', sans-serif;
      font-size: 0.8em;
    }

    .dropdown-menu {
      /*position: absolute;*/
      margin: 0;
      padding: 0;
      width: 100%;
    }
  }


</style>
