<template>
<div>

    <mt-swipe :auto="4000">
        <mt-swipe-item><img src="../images/noe.jpg" width=""></mt-swipe-item>
        <mt-swipe-item><img src="../images/two.jpg"></mt-swipe-item>
        <mt-swipe-item><img src="../images/three.jpg"></mt-swipe-item>
    </mt-swipe>
    <!--icon区域-->
    <div class="icon-container">
        <div class="fa-items">
            <img src="../images/icon-sale.png">
            <span>拍卖</span>
        </div>
        <div class="fa-items">
            <img src="../images/icon-classfity.png">
            <span>分类</span>
        </div>
        <div class="fa-items">
            <img src="../images/icon-food.png">
            <span>小车车</span>
        </div>
        <div class="fa-items">
            <img src="../images/icon-money.png">
            <span>聚划算</span>
        </div><div class="fa-items">
        <img src="../images/entrace.png">
        <span>进口</span>
    </div>
        <div class="fa-items">
            <img src="../images/incon-topup.png">
            <span>充值</span>
        </div>




    </div>
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
               /*this.$http.get('http://vue.studyit.io//api/getnewslist').then(response=>{
                   console.log("response="+response);
               })*/
            }
        }
    }
</script>

<style scoped>
    .icon-container {
        display: flex;
        flex-wrap: wrap;
    }
    .icon-container >.fa-items{
        width: 33%;
    }
    .icon-container >.fa-items >span {
        font-family: '微软雅黑';
        padding-top: 6px;
        display: block;
        text-align: center;
    color: rgb(102, 102, 102);

    }
    .icon-container >.fa-items >img {
        height: 75%;
        width: 80%;
        display: block;
        margin: 0 auto;
    }
    img {
        width: 100%;
        height: 100%;
    }
    .mint-swipe{
        height: 200px;
    }
    h3 {
        color: #2b81af;
    }
</style>