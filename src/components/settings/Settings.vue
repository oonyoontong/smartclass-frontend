<template>
  <div>
    <div id="settings-bar">
      <settings-bar/>
    </div>
    <div id="main-content-wrapper">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import SettingsBar from './SettingsBar'

  export default {
    name: 'Settings',
    components: {
      SettingsBar
    }
  }
</script>

<style>
  .datetime-picker input {
    height: 4em !important;
  }

  .content {
    padding-left: 50px;
    position: relative;
  }
</style>
