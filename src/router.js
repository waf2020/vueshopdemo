import VueRouter from 'vue-router'
import app from "./app.vue";
import home from './components/home.vue'
import  member from  './components/member.vue'
import search from './components/search.vue'
import shopcart from './components/shopcart.vue'


var router=new VueRouter({
    routes:[
        {path:'/home',component:home},
        {path:'/member',component:member},
        {path:'/search',component:search},
        {path:'/shopcart',component:shopcart},

    ],
    linkActiveClass:'mui-active'

})

export default router;