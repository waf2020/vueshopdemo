import Vue from 'vue'
import app from './app.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
import router from'./router.js'
import VueResource from 'vue-resource'
Vue.use(VueResource);

//import MintUI from 'mint-ui'
//Vue.use(MintUI);
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
import '../lib/mui/css/mui.css'
import '../lib/mui/css/icons-extra.css'
import '../lib/mui/fonts/mui.ttf'

/*import { Tabbar, TabItem } from 'mint-ui';

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);

import { TabContainer, TabContainerItem } from 'mint-ui';

Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);*/

console.log(document.getElementById("app"));



new Vue({
    el:'#app',
    data:{
        msg:"hei"
    },
    render:c=>c(app),
    router,//将路由挂载到实例中
})