<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
            <a class="navbar-brand" href="#">{{courseName}}</a>
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
    <lecture-modal
      v-show="isModalVisible"
      @close="closeModal"
    />

    <div class="list-group">
      <lecture-item v-for="lecture in $store.state.course.registeredCourses[this.$route.params['courseId']].lectures" v-bind:data="lecture" :key="lecture._id"></lecture-item>
    </div>
  </div>
</template>

<script>
  import LectureItem from "./LectureItem"
  import LectureModal from "./modal/LectureModal"

  export default {
    name: "lecture-list",
    components: {LectureItem, LectureModal},
    data (){
      return {
        isModalVisible: false
      }
    },
    computed:{
      courseName: function(){
        var course = this.$store.state.course.registeredCourses[this.$route.params['courseId']]
        return course.courseId + " " + course.courseName;
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

  function findElement(arr, propName, propValue) {
    for (var i=0; i < arr.length; i++)
      if (arr[i][propName] == propValue)
        return arr[i];

    // will return undefined if not found; you could return a default instead
  }
</script>

<style scoped>

</style>
