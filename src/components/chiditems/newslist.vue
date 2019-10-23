<template>

    <div class="container">
        <router-link :to="'/home/newsinfo/'+item.newsid"  class="item" v-for="item in news" :key="item.newsid">
        
             <div class="item-img">
                 <img :src="item.newsImages" height="55px" width="55px">
             </div>
             <div class="item-text">
                 <p>{{item.newstitles}}</p>
                 <div class="item-time-zan">
                     <a href="#">发表时间：2019-03-09</a>
                     <a>点赞：{{item.newszan}}次</a>
                 </div>
             </div>
             
        </router-link>


        
    </div>



</template>

<script>
import '../../mock/index.js'



    export default {
       data(){
          return {news:[]}
       },
       created(){

          this.getlist();

    },
    methods:{
         getlist(){
             this.$axios.get('/api/getlist').then(res=>{
                   this.news=res.data.data;
            console.log(res.data.data);
             });
           
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
          padding-top: 10px;
          padding-bottom: 6px;
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