import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

require('vue-video-player/src/custom-theme.css')
require('video.js/dist/video-js.css')
import VideoPlayer from 'vue-video-player'
import hls from "videojs-contrib-hls"

import VueCoreVideoPlayer from 'vue-core-video-player'
Vue.use(VueCoreVideoPlayer)

import api from './network/index'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VideoPlayer)
Vue.use(hls);

Vue.prototype.$api = api
Vue.prototype.$baseURL = "http://wxns9k.natappfree.cc/"

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
