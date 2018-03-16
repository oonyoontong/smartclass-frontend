<template>
  <aside class="sidebar">
    <section class="sidebar-navigation">

      <sidebar-menu/>

    </section>

  </aside>
</template>

<script>
  import SidebarMenu from './SidebarMenu'

  export default {
    name: 'Sidebar',
    components: {SidebarMenu: SidebarMenu}
  }
</script>

<style scoped>

</style>
