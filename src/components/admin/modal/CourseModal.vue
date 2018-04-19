<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal"
           role="dialog"
           aria-labelledby="modalTitle"
           aria-describedby="modalDescription"
      >
        <header
          class="modal-header"
          id="modalTitle"
        >
          <slot name="header">
            New Course

            <button
              type="button"
              class="btn-close"
              @click="close"
              aria-label="Close modal"
            >
              x
            </button>
          </slot>
        </header>

        <form class="col-4 offset-md-4">
          <span class="form-group col-4">
            <label for="CourseId">Course Code</label>
            <input v-model= "courseId" type="text" class="form-control" id="CourseId">
          </span>
          <span class="form-group col-4">
            <label for="CourseName">Course Name</label>
            <input v-model= "courseName" type="text" class="form-control" id="CourseName">
          </span>
          <span class="form-group col-4">
            <label >Description</label>
            <textarea v-model= "description" class="form-control" id="Description">
            </textarea>
          </span>
          <br/>
          <button class="btn btn-primary" v-on:click.prevent = "submitCourse">Submit</button>
        </form>


      </div>
    </div>
  </transition>
</template>

<script>
  import axios from "axios";
  export default {
    name: 'course-modal',
    data(){
      return {
        courseId: "",
        courseName: "",
        description: ""
      }
    },
    methods: {
      close: function() {
        this.$emit('close');
      },
      submitCourse:function(){
        axios.post(this.$store.state.backendUrl + 'course/create', {
          courseId: this.courseId,
          courseName: this.courseName,
          description: this.description
        })
          .then(response => {
            const liveList = response.data
            console.log("course created!")
            location.reload();
          })
        return false;
      }
    },
  };
</script>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    border: none;
    font-size: 20px;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }
</style>
