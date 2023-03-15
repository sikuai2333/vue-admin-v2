import Vue from 'vue'
import App from './App.vue'
// 导入ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 导入font-awesome
import 'font-awesome/css/font-awesome.min.css'
// 导入axios
import axios from 'axios'
// 导入router
import router from './router'

Vue.prototype.axios = axios  //挂载到原型，可以全局使用
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  // 挂载一下router
  router,
  render: h => h(App),
}).$mount('#app')
