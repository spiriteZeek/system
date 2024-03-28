<template>
  <div>登陆成功</div>
  <el-button @click="logout">退出登录</el-button>
  <el-button @click="toLogin">跳转到登录页</el-button>
  <div>传递数据：</div>
  <div>id:{{ id }}</div>
  <div>route.params.id {{ $route.params.id }}</div>
  <div>route.query.id: {{ $route.query.id }}</div>
  <div>route.query.password: {{ $route.query.password }}</div>
</template>
<script>
import { useRouter } from 'vue-router'
  export default {
    name: 'MainComp',
    props: ["id"],
    setup () {
      const router = useRouter()
      function logout() {
        router.push({ name: 'main'})
      }

      function toLogin() {
        router.push({ name: 'login'})
      }
      return {
        logout,
        toLogin,
      }
       
    }

  }
</script>