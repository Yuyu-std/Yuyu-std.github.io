import Vue from 'vue'
import VueRouter from 'vue-router'

import Main_view from '@/views/Main_view.vue'
import Root_view from '@/views/Root_view.vue'
import Vedio_view from '@/views/Vedio_view.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'home', component: Main_view },
  { path: '/root', name: "root", component : Root_view},
  { path: '/vedio', name: "vedio", component : Vedio_view}
]

const router = new VueRouter({
  routes
})

export default router
