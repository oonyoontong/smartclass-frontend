<template>
  <li class="d-flex flex-row list-group-item justify-content-between">
    <div class = "row">
      <div class = "col-8">
        {{listName}}
      </div>
      <div class = "col-2">
        {{upvotes}}
      </div>
      <div class = "col-1">
        <button
          type="button"
          class="btn btn-danger justify"
          @click = "removeCourse"
        >
          x
        </button>
      </div>
    </div>
  </li>
</template>

<script>
  import axios from "axios"

  export default {
    props:['live'],
    name: "live-item",
    computed: {
      listName: function(){
        return this.live.question
      },
      path: function(){
        return "/admin/" + this.live._id;
      },
      upvotes: function(){
        return this.live.upvotes;
      }
    },
    methods: {
      removeCourse() {
        console.log("attempting to delete course!");
        console.log(this.live._id);
        axios.delete(this.$store.state.backendUrl + 'live/delete', {
          data: {
            liveId: this.live._id
          }
        })
          .then(response => {
            console.log(response.live);
            console.log("live deleted!")
            this.$store.dispatch('registeredCourses');
            this.$emit("updateView");
          })
      }
    }

  }
</script>

<style scoped>

</style>
