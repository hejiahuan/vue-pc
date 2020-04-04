import Vue from 'vue';

import VueRouter from "vue-router";

//安装插件
Vue.use(VueRouter)

// const Home = () => import("views/home/Home")
import home from "../views/home/Home"
const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: home

    }
]


const router = new VueRouter({
    routes,
    mode: "history"

})

export default router