
<template>
    <div id="ChatBox">
        <div class="col-s-2">
            <div class="ChatBox__List">
                <chat-message v-for="message in messages" :data="message"></chat-message>
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

        components: { ChatMessage },
        data() {
            return {
                newMessage: '',
                messages: [],
                onlineUsers: []
            }
        },
        sockets: {

            'message received': function(message) {
                console.log("message received "+ message);
                this.$data.messages.push(message)
            },
            'user joined': function(message) {
                this.$data.messages.push(message)
                this.$data.onlineUsers.push(message.username)
            },
            'user left': function(message) {
                this.$data.messages.push(message)
            }
        },
        methods: {
            sendMessage(event) {
                console.log("sending message"+this.newMessage);
                event.preventDefault()
                this.$socket.emit('send message', this.newMessage)
                this.newMessage = ''
            },
            kickUser(event) {
                event.preventDefault()
                // Get the username of the user we're kicking
                let usernameToKick = event.target.getAttribute('data-username')
                // Tell the server to kick them from the chat
                this.$socket.emit('kick user', usernameToKick)
            }
        },
        computed: {
            // Surely there must be a better way to do this? @TODO
            isAdmin() {
                return this.$isAdmin
            }
        }
    }
</script>

<style>
    #ChatBox {
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
        height: 100vh;
        border-left: 1px solid #eee;
        background: #F7F7F7;
        box-shadow: -10px 0 40px #F1F1F1;
    }
    .ChatBox__List {
        height: 90vh;
        overflow: scroll;
    }
    .ChatBox__Input {
        height: 10vh;
        background: #eee;
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
<!--
<template>
    <div>
        <h1>LIVE QUESTIONS</h1>

        <div id="chat">


        </div>

        <div>
            <p v-if="isConnected">We're connected to the server!</p>
            <button @click="clickButton">Ping Server</button>
        </div>
    </div>


</template>

<script>
    export default {
        data() {
            return {
                newMessage: '',
                messages: [],
                onlineUsers: []
            }
        },
        sockets:{
            connect: function(){
                console.log('socket connected')
            },
            customEmit: function(val){
                console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
            }
        },
        methods: {
            clickButton: function(val){
                // $socket is socket.io-client instance
                this.$socket.emit('emit_method', val);
            }
        }
    }
</script>


<style scoped>

</style>-->
