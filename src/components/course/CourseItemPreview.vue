<template>
  <router-link :to="courseId + '/lectures/' + previewInfo._id">
    <section id="lecture-preview-container">
      <div id="lecture-preview-image">
        <img :src=previewInfo.previewImageUrl />
      </div>
      <div id="lecture-preview-text">
        <span id="lecture-name">{{previewInfo.name}}</span>
      </div>
    </section>
  </router-link>
</template>

<script>
  export default {
    name: "lecture-view",
    props: [
      'previewInfo',
      'courseId'
    ],
  }
</script>

<style scoped>
  #lecture-preview-container {
    display: grid;
    grid-template-areas:
      "image"
      "text";
    grid-template-rows: 75% 25%;
    width: 200px;
    height: 200px;
    border: solid 1px #DDD;
    user-select: none;
  }

  #lecture-preview-image {
    grid-area: image;
    overflow: hidden;
    -webkit-box-shadow: inset 0 -2px 8px #DDDDDD;
    -moz-box-shadow: inset 0 -2px 8px #DDDDDD;
    box-shadow: inset 0 -2px 8px #DDDDDD;
  }

  #lecture-preview-text {
    grid-area: text;
    position: relative;
    text-align: left;
    font-size: 1em;
    border-top: solid 2px #888;
    color: #555;
  }

  #lecture-preview-text > #lecture-name {
    display: block;
    padding: 2px 5px;
    line-height: 1em;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
