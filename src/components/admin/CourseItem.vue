<template>
  <li class="d-flex flex-row list-group-item justify-content-between">
    <div>
    </div>
    <router-link :to="path">
      <div>
      {{listName}}
      </div>
    </router-link>
    <div>
    <button
      type="button"
      class="btn btn-danger justify"
      @click = "removeCourse"
     >
      x
    </button>
    </div>
  </li>
</template>

<script>
  import axios from "axios"

    export default {
      props:['data'],
      name: "course-item",
      computed: {
        listName: function(){
          return this.data.courseId + "\t" + this.data.courseName;
        },
        path: function(){
          return "/admin/" + this.data._id;
        }
      },
      methods: {
        removeCourse() {
          console.log("attempting to delete course!");
          console.log(this.data._id);
          axios.delete(this.$store.state.backendUrl + 'course/delete', {
              data: {
                courseId: this.data._id
              }
            })
            .then(response => {
              console.log(response.data);
              console.log("course deleted!")
              this.$store.dispatch('registeredCourses');
            })
        }
      }
    }
</script>

<style scoped>

</style>
