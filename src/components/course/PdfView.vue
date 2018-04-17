<template>
  <div class="pdf-container">
    <embed class="pdf-viewer" :src=lectureUrl width="100%" height="100%">
  </div>
</template>

<script>
  export default {
    name: "PdfView",
    props: [
      'lectureUrl'
    ]
  }
</script>

<style scoped>
  div{
    border: 0;
    height: 100%;
  }
</style>
