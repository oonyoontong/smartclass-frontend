<template>
  <div id="lecture-wrapper">
    <div id="lecture-header">
      <button id="quiz-button">Go to Quiz</button>
    </div>
    <div id="lecture-content">
      <h1>Lecture ID: {{lectureId}}</h1>
    </div>
    <div id="lecture-footer">
      <span>Footer content</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "lecture",
    props: [
      'lectureId'
    ],
    beforeCreate(){
      // set active lecture
      // this.$store.commit('activeLecture', this.lectureId )
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
    display: grid;
    grid-template-areas:
      "header"
      "content"
      "footer";
    grid-template-rows: minmax(40px, 5%) auto minmax(40px, 8%);
  }

  #lecture-header{
    grid-area: header;
  }

  #lecture-content{
    grid-area: content;
    box-shadow: inset 0 -2px 5px #DDD, inset 0 2px 5px #DDD;
  }

  #lecture-footer{
    grid-area: footer;
  }

  #quiz-button{
    position: relative;
    float: right;
  }
</style>
