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
  }
</script>

<style scoped>
  #announcements{
    height: 1000px;
  }

  #announcements ul {
    display: table;
    table-layout: fixed;
    width: 100%;
    height: 100%;
    border: 1px solid #c2c2c2;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  #announcements ul li {
    text-align: center;
    display: table-row;
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
