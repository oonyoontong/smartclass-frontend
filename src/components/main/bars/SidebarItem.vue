<template>
  <div class="nav-item" :class='{dropdown: subItems, expanded: sidebarHover, active: dropdownActive && subItems}'>
    <router-link :to=url v-on:click.native="toggleDropdownActive">
      <i :class='"nav-icon fas " + icon'></i>
      <span class="nav-text">{{text}}</span>
    </router-link>

    <ul class="dropdown-menu" :class='{active: dropdownActive}' role="menu" v-if="subItems">
      <li v-for="subItem in subItems">
        <router-link :to=subItem.url v-if='text==="Courses"'>
          <span class="nav-text">{{subItem.text}}</span>
        </router-link>
        <router-link :to=subItem.url v-else>
          <span class="nav-text">{{subItem.text}}</span>
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
      url: {
        required: false
      },
      subItems: {
        required: false
      },
      sidebarHover: {
        required: true
      }
    },
    data() {
      return {
        dropdownActive: false
      }
    },
    methods: {
      toggleDropdownActive: function () {
        this.dropdownActive = !this.dropdownActive
        console.log("Dropdown state: ", this.dropdownActive)
      },
    },
    computed: {
    },
  }
</script>

<style scoped lang="scss">
  .nav-item {
    height: 90px;
    flex: 1;
    transition: all 0.5s;

    .dropdown-menu {
      display: flex;
      position: relative;
      top: 0;
      border-radius: 0;
      border: 0;
      background: #444;
      flex-direction: column;
      width: 100%;
      margin: 0;
      padding: 0;
      transition: height 0.3s;
      height: 0;
      overflow: hidden;

      a {
        display: inline-block;
        text-decoration: none;
        height: 100px;
        width: 100%;
        color: #FFF;
        &:hover{
          background: #DDD;
          color: #222;
        }
      }
    }

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
      }

      &.active {
        .dropdown-menu {
          display: flex;
          flex-direction: column;
          border-radius: 0;
          border: 0;
          background: #444;
          width: 100%;
          height: auto;
        }
      }
    }


    &:hover {
      color: #111;
      background-color: #FFF;

      > a {
        color: #111;
      }
    }

    > a {
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
  }


</style>
