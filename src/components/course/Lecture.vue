<template>
  <div id="lecture-wrapper">
    <div id="lecture-header">
      <span>Lecture ID: {{lectureId}}</span>
      <div id="quiz-btn-group" class="btn-group">
        <button class="btn btn-primary dropdown-toggle" id="quiz-button" data-toggle="dropdown">Go to Quiz</button>
        <ul class="dropdown-menu">
          <li><a href="#">Action</a></li>
          <li><a href="#">Another action</a></li>
        </ul>
      </div>
    </div>
    <div id="lecture-content">
      <pdf-view :lecture-url='"https://bitcoin.org/bitcoin.pdf"'></pdf-view>
    </div>
  </div>
</template>

<script>
  import PdfView from './PdfView'

  export default {
    name: "lecture",
    components: {
      PdfView
    },
    props: [
      'courseId',
      'lectureId'
    ],
    created(){
      // set active lecture
      // this.$store.commit('activeLecture', this.lectureId)
      console.log("THIS: ", this.lectureId)
      // get quiz list
    }
  }
</script>

<style scoped>
  #lecture-wrapper{
    height: 100%;
  }

  #lecture-wrapper{
    display: flex;
    flex-direction: column;
    grid-template-rows: minmax(40px, 5%) auto minmax(40px, 8%);
  }

  #lecture-header{
    /*height: 10%;*/
    max-height: 5%;
  }

  #lecture-content{
    flex: 1;
    height: 100%;
    box-shadow: inset 0 -2px 5px #DDD, inset 0 2px 5px #DDD;
  }

  #quiz-button{
    position: relative;
    float: right;
  }
</style>
