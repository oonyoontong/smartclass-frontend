
<template>
    <div>
        <h1>LECTURE VIEW</h1>

        <livequestions></livequestions>
    </div>
</template>

<script>
    import LiveQuestions from './LiveQuestions'

    export default {
        name: "lecture-view",
        components: {
            livequestions: LiveQuestions
        },
        mounted: function(){
            setTimeout(20000)
        }

    }
</script>

<style scoped>

</style>
