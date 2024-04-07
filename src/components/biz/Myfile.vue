<template>
  <el-button @click="upload">选择文件</el-button>
  <input @change="handleChange" ref="file" id="fileInput" type="file" />
  <div>
    <el-tag id="filename" type="primary" v-show="filename">{{ filename }}</el-tag>
  </div>
  <el-button @click="testServer">上传文件</el-button>
</template>

<script>
import { ref } from 'vue'
import { selfServer } from '@/http/axios.js'
export default {
  name: 'MyfileComp',
  setup() {
    const file = ref(null)
    const filename = ref('')
    const formData = new FormData()
    function handleChange(e) {
      console.log(e.target.files)
      console.log(file.value.files)
      filename.value = file.value.files[0].name
      formData.append('file', file.value.files[0])
    }

    function testServer() {
      selfServer.put('/upload', formData)
    }

    function upload() {
      file.value.click()
    }
    return {
      file,
      upload,
      handleChange,
      filename,
      testServer
    }
  }
}
</script>

<style scoped>
#fileInput {
  width: 0px;
  height: 0px;
}
#filename {
  margin-top: 10px;
}
</style>
