<template>
  <el-tabs v-model="activeName" class="demo-tabs">
    <el-tab-pane label="登录" name="login"
      ><div class="login">
        <div>登录界面</div>
        用户id：<el-input v-model="userID"></el-input> 密码：<el-input
          v-model="password"
          show-password
        ></el-input>
        <!-- <el-button @click="login1">路径参数登录</el-button> -->
        <el-button @click="login">登录</el-button>
      </div></el-tab-pane
    >
    <el-tab-pane label="注册" name="register">
      <div class="register">
        <div>注册界面</div>
        用户id：<el-input v-model="userID"></el-input> 密码：<el-input
          v-model="password"
          show-password
        ></el-input>
        <el-button @click="register">注册</el-button>
      </div></el-tab-pane
    >
  </el-tabs>
</template>
<script>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { mockHttp } from '@/http/axios.js'

export default {
  name: 'LoginComp',
  setup() {
    const router = useRouter()
    async function login() {
      const { data: res } = await mockHttp.post('/login', {
        username: userID.value || '',
        password: password.value
      })
      // 用户token保存
      localStorage.setItem('token',res.data.token)
      console.log(localStorage.getItem('token'))
      router.push({
        path: '/home',
        query: {
          userID: userID.value || ''
        }
      })
    }

    // function login1() {
    //   router.push({ name: 'home+id', params: { id: userID.value } })
    // }

    async function register() {
      const { data: res } = await mockHttp.post('/registry',{
        params: {
          username: userID.value,
          password: password.value,
        }
      })
      console.log('res:', res)
      router.push({ name: 'home', query: { id: userID.value, password: password.value } })
      console.log('注册账号')
    }

    const userID = ref('')
    const password = ref('')
    const activeName = ref('login')

    return {
      login,
      userID,
      password,
      // login1,
      register,
      activeName
    }
  }
}
</script>
