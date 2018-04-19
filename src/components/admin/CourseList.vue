<template>
  <div>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
          <a class="navbar-brand" href="#">Courses</a>
          <button
            type="button"
            class="btn"
            @click="showModal"
          >
            <i class="fas fa-plus"></i>
          </button>
        </nav>
      </div>
    </div>
  </div>
    <course-modal
      v-show="isModalVisible"
      @close="closeModal"
    />

  <div class="list-group">
    <course-item v-for="course in Array.from(this.$store.getters.registeredCoursesAsMap)" v-bind:data="course[1]" :key="course[0]"></course-item>
  </div>
  </div>
</template>

<script>
  import CourseItem from "./CourseItem"
  import CourseModal from "./modal/CourseModal"

    export default {
      name: "course-admin",
      components: {CourseItem, CourseModal},
      data (){
        return {
          isModalVisible: false
        }
      },
      methods: {
        showModal() {
          this.isModalVisible = true;
        },
        closeModal() {
          this.isModalVisible = false;
        }
      }
    }
</script>

<style scoped>

</style>
