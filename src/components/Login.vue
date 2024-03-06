<template>
  <el-tabs v-model="activeName" class="demo-tabs">
    <el-tab-pane label="登录" name="login"
      ><div class="login">
        <div>登录界面</div>
        用户id：<el-input v-model="userID"></el-input> 密码：<el-input
          v-model="password"
          show-password
        ></el-input>
        <el-button @click="login1">路径参数登录</el-button>
        <el-button @click="login">查询参数登录</el-button>
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

export default {
  name: 'LoginComp',
  setup() {
    const router = useRouter()
    function login() {
      router.push({ name: 'home', query: { id: userID.value, password: password.value } })
    }

    function login1() {
      router.push({ name: 'home+id', params: { id: userID.value } })
    }

    function register() {
      console.log('注册账号')
    }



    const userID = ref('')
    const password = ref('')
    const activeName = ref('login')

    return {
      login,
      userID,
      password,
      login1,
      register,
      activeName
    }
  }
}
</script>
