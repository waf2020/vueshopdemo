<template>
    <div class="app-container">
    <!--顶部-->
    <div class="my-header"><mt-header fixed title="拍拍网"></mt-header></div>
     <transition>
        <router-view></router-view>
        </transition>
    <!--底部-->
    <nav class="mui-bar mui-bar-tab">
        <router-link to="/home" class="mui-tab-item " href="#tabbar">
            <span class="mui-icon mui-icon-home"></span>
            <span class="mui-tab-label">首页</span>
        </router-link>
        <router-link to="/member" class="mui-tab-item" href="#tabbar-with-chat">
            <span class="mui-icon mui-icon mui-icon-weixin"></span>
            <span class="mui-tab-label">会员</span>
        </router-link>
        <router-link to="/search" class="mui-tab-item" href="#tabbar-with-contact">
            <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">1</span></span>
            <span class="mui-tab-label">购物车</span>
        </router-link>
        <router-link to="/shopcart" class="mui-tab-item" href="#tabbar-with-map">
            <span class="mui-icon mui-icon mui-icon-search"></span>
            <span class="mui-tab-label">搜索</span>
        </router-link>
    </nav>
    </div>

</template>

<script>
    import '../lib/mui/css/mui.css'
    import '../lib/mui/css/icons-extra.css'
    import '../lib/mui/fonts/mui.ttf'
    export default {
        data(){
            return {name:'acc',instance:''}
        },

        created() {

        }
    }
</script>

<style scoped>
      .app-container{
          overflow-x: hidden;
      }

    .my-header{
        height: 40px;
    }
    .mt-header {
        padding-top: 20px !important;
    }

    .v-enter
     {
        opacity: 0;
        transform: translateX(100%);
    }
    .v-leave-to {
        opacity: 0;
        transform: translateX(-100%);
        position: absolute;
    }

    .v-enter-active,
    .v-leave-active{
         transition: all 0.5s ease;
    }    
</style>