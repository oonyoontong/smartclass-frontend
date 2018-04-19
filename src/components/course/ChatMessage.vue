<template>
  <div class="Message">
    <div class="Message--Message">
      <p class="Message__Author">
        {{data.upvotes}}
      </p>

      <p class="Message__Content">
        {{ data.question }}
      </p>

      <button v-on:click="upVote" :disabled="!data.upvoted.indexOf(accountId) || clicked">upvote</button>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['data'],
    data: function(){
      return {
        liveData: this.data,
        accountId: localStorage.token,
        clicked: false
      }
    },
    computed: {
      upvoteSubmitted: () => {
        console.log("Is this even working");
        console.log(this.data);
      }
    },

    methods: {
      upVote(event){
        console.log("SENDING UPVOTE")
        this.data['accountId'] = localStorage.token
        console.log(localStorage.token);
        this.$socket.emit('upvote', this.data);
        this.clicked = true;
        console.log("clicked =" + this.clicked);
      }

    }

  }

</script>

<style scoped>
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
