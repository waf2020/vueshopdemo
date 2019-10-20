import VueRouter from 'vue-router'
import app from "./app.vue";
import home from './components/home.vue'
import  member from  './components/member.vue'
import search from './components/search.vue'
import shopcart from './components/shopcart.vue'
import newslist from "./components/chiditems/newslist.vue";

var router=new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:home},
        {path:'/member',component:member},
        {path:'/search',component:search},
        {path:'/shopcart',component:shopcart},
        {path:'/home/newlsist',component:newslist},

    ],
    linkActiveClass:'mui-active'

})

export default router;