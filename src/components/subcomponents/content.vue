<template>
    <div class="container">
              <div class="contents">
                   <textarea rows="5" placeholder="请输入你BB的话（最多吐槽120字)" maxlength="120"></textarea>
              
              <mt-button type="primary" size="large">发表评论</mt-button>
              </div>
              <div class="content-container">
                  <div class="retex" v-for="index in contents" :key="index.contentids">
                 <div class="head_body">
                     <span>第 {{index.contentids}} 楼</span>
                     <span>用户：{{index.contentname}}</span>
                     <span>发表时间：{{index.contentdata}}</span>
                 </div>
                 <div class="tail_body">
                     {{index.contentcomms}}
                 </div>
                 </div>
                 <div class="retex">
                 <div class="head_body">
                     <span>第1楼</span>
                     <span>用户：匿名用户</span>
                     <span>发表时间：2019-06-21 21:09</span>
                 </div>
                 <div class="tail_body">
                     sasas沙雕
                 </div>
                 </div>
                 <div class="retex">
                 <div class="head_body">
                     <span>第1楼</span>
                     <span>用户：匿名用户</span>
                     <span>发表时间：2019-06-21 21:09</span>
                 </div>
                 <div class="tail_body">
                     sasas沙雕
                 </div>
                 </div>

                 <div class="retex">
                 <div class="head_body">
                     <span>第1楼</span>
                     <span>用户：匿名用户</span>
                     <span>发表时间：2019-06-21 21:09</span>
                 </div>
                 <div class="tail_body">
                     sasas沙雕
                 </div>
                 </div>
              </div>
              <br>
              <br>
              <br>
              <br>
              <br>
              <br>
              <br>
              <br>
              <br>
    </div>
</template>


<style scoped>
.content-container {
margin-top: 10px;
}

  *{
      margin:0;
      padding: 0;
  }

  .head_body {
      background-color: #ccc;
      height: 30px;
  }
  .head_body span {
         padding-right: 5px;
         font-size: 14px;
         color: black;
         line-height: 30px;
  }
  .tail_body {
      height: 40px;
      background-color: #fff;
        line-height: 40px;
  }
</style>
<script>
export default {
    data(){
        return {contents:[]}
    },
    methods: {
        getAllcontent(){
          
            this.$axios.get('/api/getallcontent').then(res=>{
                   this.contents=res.data.data;
            console.log(res.data.data);
             });
        }
    },
    created() {
     
        
        this.getAllcontent();
    },
}
</script>