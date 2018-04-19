<template>
  <li class="list-group-item justify-content-between">
    <div class = "row">
      <div class = "col-4">
        {{upvotes}}
      </div>

      <div class = "col-4">
        {{listName}}
      </div>

      <div class = "col-4">
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
    props:['feedback'],
    name: "feedback-item",
    computed: {
      listName: function(){
        return this.feedback.feedback
      },
      path: function(){
        return "/admin/" + this.feedback._id;
      },
      upvotes: function(){
        return this.feedback.rating;
      }
    },
    methods: {
      removeCourse() {
        console.log("attempting to delete course!");
        console.log(this.feedback._id);
        axios.delete(this.$store.state.backendUrl + 'feedback/delete', {
          data: {
            feedbackId: this.feedback._id
          }
        })
          .then(response => {
            console.log(response.feedback);
            console.log("feedback deleted!")
            this.$store.dispatch('registeredCourses');
            this.$emit("updateView");
          })
      }
    }
  }
</script>

<style scoped>

</style>
