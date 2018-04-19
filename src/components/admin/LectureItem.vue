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
        @click = "removeLecture"
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
    name: "lecture-item",
    computed: {
      listName: function(){
        return this.data.lectureName;
      },
      path: function(){
        return "/admin/" +this.$route.params["courseId"] +"/"+ this.data._id;
      }
    },
    methods: {
      removeLecture() {
        console.log("attempting to delete course!");
        console.log(this.data._id);
        axios.delete(this.$store.state.backendUrl + 'lecture/delete', {
          data: {
            lectureId: this.data._id
          }
        })
          .then(response => {
            console.log(response.data);
            console.log("lecture deleted!")
            this.$store.dispatch('registeredCourses');
            this.$emit("updateView");
          })
      }
    }
  }
</script>

<style scoped>

</style>
