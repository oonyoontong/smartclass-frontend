<template>
    <div class="Message">
        <div class="Message--Alert" v-if="isAlert">
            <strong>{{ data.message }}</strong>
        </div>

        <div class="Message--Message" v-else>
            <p class="Message__Author">
                {{ data.timestamp }}
            </p>

            <p class="Message__Content">
                {{ data.message }}
            </p>
            <label>{{upvote}}</label>
            <button v-on:click="upVote">upvote</button>


        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                upvote: 0
            }
        },
        props: ['data'],

        computed: {
            isAlert() {
                return this.data.type === 'alert'
            }
        },

        methods:{
            upVote: function(){
                console.log("upvaote");
                this.$data.upvote++;
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