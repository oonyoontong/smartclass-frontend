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
  <!--  <lecture-modal v-show="isModalVisible" @close="closeModal"/>
-->
    <div class="container-fluid">
      <div class = "row">
        <div class="col-sm list-group">
          <div class = "list-group-item active">Live Questions</div>
          <live-item v-for="live in $store.getters.getLiveList" v-bind:live="live" :key = "live._id"></live-item>
        </div>
        <div class="col-sm list-group">
          <div class = "list-group-item active">Quizzes</div>
        </div>
        <div class="col-sm list-group">
          <div class = "list-group-item active">Feedback</div>
          <feedback-item v-for = "feedback in $store.state.feedback.feedbackList" v-bind:feedback = "feedback" :key = "feedback._id"></feedback-item>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import LiveItem from "./LiveItem"
  import FeedbackItem from "./FeedbackItem"

  export default {
    name: "lecture-child-list",
    components: {
      FeedbackItem,
      LiveItem},
    data() {
      return {
        isModalVisible: false,
        courseName: null,
        lecture: null

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
      'courseId',
      'lectureId'
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
      },
      updateView() {
        const course = this.$store.state.course.registeredCourses[this.courseId]
        const lecture = this.$store.state.course.registeredCourses[this.courseId].lectures[this.lectureId];
        this.lecture = lecture;
        this.courseName = lecture.lectureName;
        this.$store.dispatch("fetchLiveList", this.$route.params['lectureId']);
        this.$store.dispatch("fetchFeedbackList",this.$route.params['lectureId']);
      }
    }
  }

</script>

<style scoped>


</style>
