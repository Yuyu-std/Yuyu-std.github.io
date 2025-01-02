import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import api from './network/index'

Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.prototype.$api = api
Vue.prototype.$baseURL = "http://127.0.0.1:8888/"

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
