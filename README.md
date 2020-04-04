####创建vue 项目
1vue create xiaomi
####安排文件目录
![1.png]
####安装插件
npm i vue-lazyload element-ui node-sass sass-loader vue-awesome-swiper vue-axios vue-cookie --save-dev

2####cookie,localStorage,sessionStorage三者区别
https://developer.mozilla.org/zh-CN/docs/Web/API/Window/sessionStorage
三者区别
    存储大小:Cookied-4k,localStorage 5M
    有效期:Cookie拥有有效期，localStorage永久存储
    cookie会发送到服务器端,存储在内存中，localStorage只在浏览器
    路径:Cookie有路径限制，Storage只存储在域名下
    API：Cookie没有特定的API,Storage有对应的API

####利用别人封装的Stroage
https://github.com/RobinCK/vue-ls
在stroage中建立

import Storage from 'vue-ls';

const options = {
  namespace: 'vuejs__', // key prefix
  name: 'ls', // name variable Vue.[ls] or this.[$ls],
  storage: 'session', // storage name session, local, memory
};

const storage ={
    Storage,
    options
}


export default storage

main.js全局引入
//引入vue-ls
import storage from "./stroage"

Vue.use(storage.Storage,storage.options);

用法
this.$ls应用

