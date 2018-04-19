<template>
  <div>
    <router-view/>
  </div>

</template>

<script>
  import CourseAdmin from "./CourseList";
  export default {
    name: "admin-dash",
    components: {
      CourseAdmin
    },
    beforeCreate(){
      this.$store.dispatch('registeredCourses');
    }

  }
</script>

<style scoped>

</style>
