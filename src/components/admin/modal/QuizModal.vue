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
            New Quiz

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
            <label for="LectureName">Quiz Name</label>
            <input v-model= "quizName" type="text" class="form-control" id="LectureName">
          </span>
          <span class="form-group col-4">
            <label >Description</label>
            <textarea v-model= "description" class="form-control" id="Description">
            </textarea>
          </span>


          <br/>
          <button class="btn btn-primary" v-on:click.prevent = "submitLecture">Submit</button>
        </form>

        <button
          type="button"
          class="btn btn-primary"
          @click="showModal"
        >
          <i class="fas fa-plus"></i>
        </button>
        <div class = "table-responsive">
          <table class = "table table-striped container-fluid">
            <thead>
            <tr>
              <th scope = "col">#</th>
              <th scope = "col">Question</th>
              <th scope = "col">Type</th>
              <th scope = "col">Choices</th>
              <th scope = "col">Answer</th>
            </tr>
            </thead>

            <tbody>

            </tbody>

          </table>
        </div>

        <question-modal
          v-show="isModalVisible"
          @close="closeModal"/>

      </div>
    </div>
  </transition>
</template>

<script>
  import axios from "axios";
  import QuestionModal from "./QuestionModal"
  export default {
    name: 'lecture-modal',
    components: {QuestionModal},
    data(){
      return {
        quizName: "",
        description: "",
        isModalVisible: false,
        questions: []
      }
    },
    methods: {
      close: function() {
        this.$emit('close');
      },
      submitLecture:function(){
        axios.post(this.$store.state.backendUrl + 'lecture/create', {
          courseId: this.$route.params["courseId"],
          lectureName: this.lectureName,
          description: this.description
        })
          .then(response => {
            const liveList = response.data
            console.log("lecture created!")
            this.$store.dispatch('registeredCourses');
            this.$emit("close");
          })
        return false;
      },
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
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
    padding: 5px;
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
