import { createApp } from 'vue'
import router from "@/index"
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/index.css'
const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
