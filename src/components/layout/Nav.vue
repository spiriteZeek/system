<template>
  <div class="container">
    <el-menu class="no-border-right" :default-active="defaultMenu" router>
      <el-menu-item v-for="route in menuItemPathRef" :key="route.path" :index="route.path">{{
        route.text
      }}</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
import { useRouter, useRoute } from 'vue-router'
import { ref, watch } from 'vue'
export default {
  name: 'NavComp',
  setup() {
    const router = useRouter()
    const route = useRoute()
    const menuItemPath = [
      { path: '/home/upload', text: '上传文件' },
      { path: '/home/myfile', text: '我的文件' },
      { path: '/home/weather', text: '查询天气api'}
    ]
    const defaultMenu = ref(menuItemPath[0].path)
    const menuItemPathRef = ref(menuItemPath)

    watch(
      () => route.path,
      () => {
        menuItemPath.forEach((item) => {
          if (item.path == route.path) {
            defaultMenu.value = route.path
          }
        })
      },
      { immediate: true }
    )

    return {
      defaultMenu,
      menuItemPathRef
    }
  }
}
</script>

<style scoped>
.container {
  width: 20em;
  height: 100%;
  overflow-y: auto;
  border-right: solid 1px var(--el-menu-border-color);
}

.container::-webkit-scrollbar {
  display: none;
}

.no-border-right {
  border-right: none;
}
</style>
