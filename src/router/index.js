import Vue from 'vue';

import VueRouter from "vue-router";

//安装插件
Vue.use(VueRouter)

const Home = () => import("views/home/Home")
const routes = [
    {
        path: "",
        redirect: "/home"
    },
    {
        path: "/home",
        component: Home

    }
]


const router = new VueRouter({
    routes

})

export default router