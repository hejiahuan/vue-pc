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


####写首页的样式
1 在APP.vue中引入scss @import
    <style>
    @import './assets/scss/reset.scss'
    </style>
2 background-size （这个html居然忘了）
         /* 1cover是把整个盒子全屏化，相等于拉伸了 
           2contain不希望图片变形，拉伸
           3百分比：相当于盒子的宽20%，高80%
        */
        background-size: contain;

3将重复的样式放入Basc.scss中
然后引用就可以用
@import 'assets/basic/basc.scss';
4 scss 用伪类&
a{
            display: inline-block;
            width: 110px;
            height: 55px;
            &::before{

            }
          }

5制作logo过渡效果
transition是最简单的过渡效果， transform: 比他更复杂更多的效果
transition 是最简单的过渡效果
当点击小米图片的时候会过渡效果给另外一张图片
https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition
思路
1首先用before和after加入两张图片
2当他margin-left:-55px的时候就会变另外一张
3transition过渡效果
:hover的时候magin-left-55px
鼠标离开的时候 也加入效果
 a{
            display: inline-block;
            width: 110px;
            height: 55px;
            &::before{
                content: '';
                display: inline-block;
                width: 55px;
                height: 55px;
                background: url('/imgs/mi-logo.png') no-repeat center;
                background-size: contain;
                transition: margin .2s;
            }
            &::after{
                content: '';
                display: inline-block;
                width: 55px;
                height: 55px;
                background: url('/imgs/mi-home.png') no-repeat center;
                background-size: contain;
            } 
           &:hover::before{
             margin-left: -55px;
              transition: margin .2s;
           }
          }


####新学习了一个border-box属性
https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-sizing
 // box-sizing: border-box;该如何计算定义元素的总宽度和高度
        // content-box | border-box  默认cotent-box
        // border-box (最真正的宽高)计算  实际宽高是width减去(border + padding)的值

####scss引入混入（公共函数样式）掌握
其实就是一个方法 name自己定
@mixin name {
    
}

例子
@mixin flex($hov:space-between,$col:center) {
    display: flex;
    justify-content: $hov;
    align-items: $col;
    
}

使用
1引入css
@import "assets/scss/mixin.scss";
2使用
  //引入mixin函数方式
  @include flex();


####导航菜单的下拉功能
1首先把下拉菜单做出来用的是display:absolute，top,left设置好位置
然后设置好高度，宽度
2用伪类
hover,做鼠标点上去，和离开的效果
我们在鼠标没放之前opacity为0,并且overflow:hidden
放上后，透明度为1，并且设置高度
3如果刚放下去，下面就不见了，我们可以做过渡效果
 transition: all 0.5s ease-out 0.4s ;   放在上面0.4S才出现，这样可以解决这个问题。

CSS 完全可以做不同分类导航，弄出不同数据！！！！！

