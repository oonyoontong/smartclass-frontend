<template>
  <div id="announcements">
    <ul>
      <li class="content-header">
        <h1>Announcements</h1>
      </li>
      <li class="content-body">
        <span>Body</span>
      </li>
      <li class="content-summary">
        <span>Summary</span>
      </li>
      <li class="content-footer">
        <span>Footer</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "announcement-view",
    props: [
      'courseId'
    ]
  }
</script>

<style scoped>
  #announcements{
    background: cornflowerblue;
  }

  #announcements .content-header{
    alignment: top;
  }

  #announcements .content-summary {
    alignment: right;
  }

  #announcements .content-footer{
    alignment: bottom;
  }

</style>
