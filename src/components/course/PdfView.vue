<template>
  <div class="pdf-container">
    <embed class="pdf-viewer" width="100%" height="100%" :src=lectureUrl>
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

<style scoped lang="scss">
  div{
    display: block;
    /*position: absolute;*/
    border: 0;
    height: 100%;

    .pdf-viewer{
      height: 100%;
      width: 100%;
    }
  }
</style>
