import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import MainComp from '@/components/Main.vue'
import LoginComp from '@/components/Login.vue'


const routes = [
  { path: '/', component: MainComp },
  { path: '/login', component: LoginComp },
]

const router = createRouter({
  history: createWebHistory(),
  routes //routes: routes 的缩写
})

export default router
