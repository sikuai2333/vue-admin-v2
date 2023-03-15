import Vue from 'vue'
import App from './App.vue'
// 导入ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 导入font-awesome
import 'font-awesome/css/font-awesome.min.css'


Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  render: h => h(App),
}).$mount('#app')
