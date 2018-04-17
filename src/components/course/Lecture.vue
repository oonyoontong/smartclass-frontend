<template>
  <div id="lecture-wrapper">
    <div id="lecture-header">
      <button id="quiz-button">Go to Quiz</button>
    </div>
    <div id="lecture-content">
      <!--<h3>Lecture ID: {{lectureId}}</h3>-->
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
