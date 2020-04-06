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

####利用别人vue-ls封装的Stroage
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
####跨域（只有前端浏览器才存在）
协议不一样，域名不一样，端口不一样都属于跨域
cors(只需要后端做修改)
[!2.png]
jsonp(前后端都修改,特别流行)他不是请求是一段js
npm install jsonp --save-dev
https://www.npmjs.com/package/jsonp
接口代理（随心所欲了nginx代理）前后端都不需要改
vue都给你想好了，创建
vue.config.js ===>(整个webpack配置表,webpack会把配置传送给nginx服务器)
node.js使用的是comm.js规范就不能用import了，module.exports

module.exports={
    devServer:{
        host:'localhost',
        port:8080,
        proxy:{
            //意思是当我们访问xxxx/api/xxx的时候，就会被代理到
            //https://www.imooc.com'中
            '/api':{
                target:'https://www.imooc.com',
                changeOrigin:false
            }
        }
    }

}


####接口错误拦截(axios拦截器)
1统一报错
2未登陆统一拦截
3请求值，返回值统一处理




