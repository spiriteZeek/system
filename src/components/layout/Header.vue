<template>
  <div class="container">
    <div class="menu"></div>
    <el-popover placement="top-start" :width="200" trigger="hover">
      <template #reference>
        <img width="48" height="48" class="avatar" src="/public/avatar.jpg" />
      </template>
      <el-button size="small" type="primary" @click="logout">退出</el-button>
    </el-popover>
  </div>
</template>
<script>
import { useRouter } from 'vue-router'
export default {
  name: 'HeaderComp',
  setup() {
    const router = useRouter()
    function logout() {
      if (localStorage.getItem('token')) {
        localStorage.removeItem('token')
      }
      router.push('/login')
    }
    return {
      logout
    }
  }
}
</script>

<style scoped>
.container {
  height: 5.5em;
  display: flex;
  align-items: center;
}
.menu {
  flex-grow: 1;
}
.avatar {
  border-radius: 50%;
  margin-right: 2em;
}
.avatar:hover {
  cursor: pointer;
}
</style>
