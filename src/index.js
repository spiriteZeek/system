import { createRouter, createWebHashHistory } from 'vue-router'
import MainComp from '@/components/Main.vue'
import LoginComp from '@/components/Login.vue'


const routes = [
  { path: '/', component: MainComp },
  { path: '/login', component: LoginComp },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes //routes: routes 的缩写
})

export default router
