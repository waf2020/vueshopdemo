<template>
<div>
    <h3>home</h3>
    <mt-swipe :auto="4000">
        <mt-swipe-item>1</mt-swipe-item>
        <mt-swipe-item>2</mt-swipe-item>
        <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
</div>
</template>

<script>
    export default {
        data(){
            return{}
        },
        created() {
            this.getlist();
        },
        methods:{
            getlist(){
               this.$http.get('http://vue.studyit.io//api/getnewslist').then(response=>{
                   console.log("response="+response);
               })
            }
        }
    }
</script>

<style scoped>
    .mint-swipe{
        height: 200px;
    }
    h3 {
        color: #2b81af;
    }
</style>