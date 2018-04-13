<template>
  <div id="ChatBox">
    <div class="col-s-2">
      <div class="ChatBox__List">
        <chat-message v-for="message in $store.getters.getLiveList" v-bind:data="message" :key="message._id"></chat-message>
      </div>
      <div class="ChatBox__Input">
        <form @submit="sendMessage" action="/" method="post">
          <input type="text" v-model="newMessage" placeholder="Enter your message here">
        </form>
      </div>

    </div>
  </div>
</template>

<script>
  import ChatMessage from './ChatMessage.vue'

  export default {
    components: {ChatMessage},
    data() {
      return {
        newMessage: ''
      }
    },
    props: [
      'lectureId'
    ],
    sockets: {
      'message received': function (message) {
        console.log("message received " + message);
        this.$store.commit('SOCKET_ADD_LIVE_QUESTION',message)
      },
      'upvote received': function (message) {
        this.$store.dispatch("fetchLiveList", this.$route.params['lectureId']);
      }
    },
    methods: {
      sendMessage(event) {
        console.log("sending message")
        var payload = {
          lectureId: this.$route.params['lectureId'],
          question: this.newMessage
        }
        event.preventDefault()
        this.$socket.emit('send message', payload)
        this.newMessage = ''
      },

    },
    computed: {
      // TODO: Surely there must be a better way to do this?
      isAdmin() {
        return this.$isAdmin
      }
    },
    mounted(){
      this.$socket.emit("room", this.$route.params['lectureId'])
      this.$store.dispatch("fetchLiveList", this.$route.params['lectureId']);
      console.log(this.$store)
    },
    created(){
      console.log(this.$route.params)
    },
    beforeDestroy(){
      this.$socket.emit("leave room","leave room")
    }

  }
</script>

<style scoped>
  #ChatBox {
    display: grid;
    grid-template-areas:
      "questions"
      "input";
    grid-template-rows: 82vh auto;
    width: 100%;
    height: 100%;
    margin-right: 0;
  }

  #Chat__ChatBox ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .ChatBox__Left {
    padding-right: 0;
  }

  .ChatBox__Right {
    height: 80vh;
    border-left: 1px solid #eee;
    background: #F7F7F7;
    box-shadow: -10px 0 40px #F1F1F1;
  }

  .ChatBox__List {
    overflow: scroll;
    grid-area: questions;
  }

  .ChatBox__Input {
    background: #eee;
    grid-area: input;
    border-top: 3px solid #ddd;
    padding: 20px;
  }

  .ChatBox__Input input {
    width: 100%;
    background: white;
    padding: 10px;
  }

  .ChatBox__Input input:focus {
    outline: none;
  }

  ul.ChatBox__OnlineUsers {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  h3 {
    margin-top: 20px;
    text-transform: uppercase;
    margin-bottom: 5px;
    font-size: 16px;
    font-weight: bold;
    color: #999;
  }
</style>
