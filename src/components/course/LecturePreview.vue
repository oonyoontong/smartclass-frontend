<template>
  <div id="lecture-preview-container">
    <div id="lecture-preview-image">
      <i class="fas fa-camera fa-6x"></i>
    </div>
    <div id="lecture-preview-name">
      <h1>Lecture: {{lectureInfo.name}}</h1>
    </div>
  </div>
</template>

<script>
  export default {
    name: "lecture-view",
    props: [
      'lectureInfo'
    ]
  }
</script>

<style scoped>
  #lecture-preview-container {
    display: flex;
    flex-direction: column;
    background: lightgray;
    margin: 5px;
    padding: 0;
    width: 200px;
    height: 200px;
    box-shadow: 5px 5px 5px 0 #EEEEEE;
  }
</style>
