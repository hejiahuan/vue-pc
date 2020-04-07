import Vue from 'vue'
import App from './App.vue'
import router from "./router"
//axios
import axios from 'axios'

import VueAxios from 'vue-axios'

//引入vue-ls
import storage from "./stroage"
Vue.use(storage.Storage,storage.options);

//axios的全局设置并且设置拦截器
axios.defaults.baseURL="/api";
axios.defaults.timeout=8000;

axios.interceptors.response.use(config=>{
  const res=config.data;
  if(res.status===0){
    return res.data

    //错误
  }else if(res.status==10){
      window.location.href='/login'
  }else{
    alert(res.msg)
  }

},error=>{

})

Vue.use(VueAxios, axios)







Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
