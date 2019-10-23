<template>
<div>
     <h1>假装有数据{{id}}</h1>
<div  v-for="item in news" :key="item.newsid">
    <h3>sss {{item.newsid}}</h3>
   
</div>
<h1>sssssssssss</h1>  
<content-box></content-box>
</div>  
</template>

<script>

import content from '../../subcomponents/content.vue'
export default {
    data(){
        return{
            id:this.$route.params.id, //将url地址中的id挂载到data上面
            news:[]
        }
    },
    methods:{
         getnewsinfo(){
             this.$axios.get('/api/getlist').then(res=>{
                   this.news=res.data.data;
            console.log("this.news==="+this.news);
             });
           
        }
    },
    created(){
          this.getnewsinfo();
    },
    components:{
        'content-box':content
    }
}
</script>