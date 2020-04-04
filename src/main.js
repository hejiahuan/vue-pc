import Vue from 'vue'
import App from './App.vue'
import router from "./router"

//引入vue-ls
import storage from "./stroage"



Vue.use(storage.Storage,storage.options);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
