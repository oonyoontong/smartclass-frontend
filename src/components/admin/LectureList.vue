<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
            <a class="navbar-brand" href="#">{{courseName}}</a>
            <button type="button" class="btn" @click="showModal">
              <i class="fas fa-plus"></i>
            </button>
          </nav>
        </div>
      </div>
    </div>
    <lecture-modal v-show="isModalVisible" @close="closeModal"/>

    <div class="list-group">
      <lecture-item v-for="lecture in $store.state.course.registeredCourses[this.courseId].lectures" v-bind:data="lecture" :key="lecture._id"></lecture-item>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import LectureItem from "./LectureItem"
  import LectureModal from "./modal/LectureModal"

  export default {
    name: "lecture-list",
    components: {LectureItem, LectureModal},
    data() {
      return {
        isModalVisible: false,
        courseName: null,
        lectures: []
      }
    },
    watch: {
      coursesLoaded(isLoaded){
        this.updateView()
      }
    },
    created(){
      if(this.coursesLoaded){
        this.updateView()
      }
    },
    props: [
      'courseId'
    ],
    computed: {
      ...mapGetters({
        coursesLoaded: 'coursesLoaded'
      })
      // courseName: function () {
      //   const course = this.$store.state.course.registeredCourses[this.courseId]
      //   return course.courseId + " " + course.courseName;
      // }
    },
    methods: {
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
        this.updateView();
      },
      updateView() {
        console.log("Updating....");
        const course = this.$store.state.course.registeredCourses[this.courseId]
        this.courseName = course.courseId + " " + course.courseName
        this.lectures = this.$store.state.course.registeredCourses[this.courseId].lectures
      }
    }
  }

</script>

<style scoped>

</style>
