import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import MainComp from '@/components/Main.vue'
import LoginComp from '@/components/Login.vue'
import HomeComp from '@/components/Home.vue'

const routes = [
  { path: '/', name: 'main', component: MainComp },
  { path: '/login', name: 'login', component: LoginComp },
  { path: '/home', name: 'home', component: HomeComp, props: (route) => ({ id: route.query.id}) },
  { path: '/home/:id', name: 'home+id', component: HomeComp, props: true, },
  
  // 匹配不到时，跳转到/
  { path: '/:pathMatch(.*)*', name: 'NotFound', redirect: '/' }, 
]
const router = createRouter({
  history: createWebHistory(),
  routes //routes: routes 的缩写
})

export default router
