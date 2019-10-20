<template>

    <div class="container">
        <div class="item">
             <div class="item-img">
                 <img src="../../images/noe.jpg" height="55px" width="55px">
             </div>
             <div class="item-text">
                 <p>嘻嘻几号放假的还款方式从你的风格萨巴</p>
                 <div class="item-time-zan">
                     <a href="#">发表时间：2019-03-09</a>
                     <a>点赞：11次</a>
                 </div>
             </div>
        </div>

        <div class="item">
            <div class="item-img">
                <img src="../../images/noe.jpg" height="55px" width="55px">
            </div>
            <div class="item-text">
                <p>嘻嘻几号放假的还款方式从你的风格萨巴</p>
                <div class="item-time-zan">
                    <a href="#">发表时间：2019-03-09</a>
                    <a>点赞：11次</a>
                </div>
            </div>
        </div>

        <div class="item">
            <div class="item-img">
                <img src="../../images/noe.jpg" height="55px" width="55px">
            </div>
            <div class="item-text">
                <p>嘻嘻几号放假的还款方式从你的风格萨巴</p>
                <div class="item-time-zan">
                    <a href="#">发表时间：2019-03-09</a>
                    <a>点赞：11次</a>
                </div>
            </div>
        </div>
    </div>



</template>

<script>
import '../../mock/index.js'



    export default {
       data(){
          return {users:[]}
       },
       created(){

          this.getlist();

    },
    methods:{
        async getlist(){
            const{data:res}=await this.$http.get('/api/getlist');
            console.log(res);
        }
    }
    }
   
</script>

<style scoped>
    *{
        padding: 0;
        margin: 0;
        overflow-x:hidden;
    }
      .item {
          margin-left: 7px;
          padding-top: 12px;
          padding-bottom: 8px;
          /*height: px;*/
          width: 100%;
          display: flex;
          border-bottom: 1px solid gray;
         justify-content: space-between;
      }
      .item >.item-img >img {

      }
    .item-text {
        padding-left: 10px;
        flex: 1;
        /*background-color: pink;*/
        color: black;
    }
    .item-text >p {
        color: black;
        font-size: 16px;
        font-family: '微软雅黑';
    }
    .item-time-zan {
        display: flex;
        justify-content: space-between;
        padding-top: 10px;
    }
      .item-time-zan >a:nth-child(2){
          padding-right: 16px;
      }
    .item-time-zan >a {
        color: #0062cc;
        font-size: 14px;
    }
</style>