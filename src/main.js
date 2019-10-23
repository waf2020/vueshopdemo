import Vue from 'vue'
import app from './app.vue'
import VueRouter from 'vue-router'

import axios from 'axios'
//全局配置axios
 Vue.prototype.$axios=axios;

Vue.use(VueRouter);
import router from'./router.js'
// import VueResource from 'vue-resource'
// Vue.use(VueResource);



//import MintUI from 'mint-ui'
//Vue.use(MintUI);
import { Header,Button } from 'mint-ui';
//全局引入mint-uicss样式
import "mint-ui/lib/style.css"
Vue.component(Header.name, Header);
Vue.component(Button.name,Button);

import { Swipe, SwipeItem } from 'mint-ui';



Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
import '../lib/mui/css/mui.css'
import '../lib/mui/css/icons-extra.css'
import '../lib/mui/fonts/mui.ttf'



//console.log(document.getElementById("app"));



new Vue({
    el:'#app',
    data:{
        msg:"hei"
    },
    render:c=>c(app),
    router,//将路由挂载到实例中
})