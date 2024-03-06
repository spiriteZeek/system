<template>
  <div>广告页</div>
  <el-button @click="toLogin">跳转登录</el-button>
</template>
<script>
import { useRouter } from 'vue-router'
  export default {
    name: 'MainComp',
    setup() {
      const router = useRouter()
      function toLogin() {
        // router.push("/login")
        router.push({name: 'login'})
      }

      return {
        toLogin,
      }
    }
  }
</script>