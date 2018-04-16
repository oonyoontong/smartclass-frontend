<template>
  <div class="Message">
    <div class="Message--Message">
      <p class="Message__Author">
        {{data.upvotes}}
      </p>

      <p class="Message__Content">
        {{ data.question }}
      </p>

      <button v-on:click="upVote" :disabled="upvoteSubmitted">upvote</button>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['data'],
    computed: {
      upvoteSubmitted: () => {
        return false;
      }
    },

    methods: {
      upVote(event){
        console.log("SENDING UPVOTE")
        this.$socket.emit('upvote', this.data)
      }

    }

  }

</script>

<style>
  #ChatBox .Message {
    background: white;
    overflow: hidden;
    padding: 10px;
  }

  #ChatBox .Message:nth-child(even) {
    background: #F7F7F7;
  }

  #ChatBox .Message p {
    margin: 0;
  }

  #ChatBox .Message p.Message__Author {
    font-style: italic;
    color: #999;
    margin-bottom: 5px;
  }
</style>
