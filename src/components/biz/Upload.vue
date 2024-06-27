<template>
  <el-button @click="upload">选择文件</el-button>
  <input @change="handleChange" ref="file" id="fileInput" type="file" />
  <el-tag id="filename" type="primary" v-show="filename">{{ filename }}</el-tag>
  <div>
    <el-button @click="testServer">上传文件</el-button>
    <el-button @click="base64Upload">base64上传</el-button>
  </div>
  <img v-show="filename" :src="imgUrl" />
</template>

<script>
import { onMounted, onUnmounted, ref } from 'vue'
import { selfServer } from '@/http/axios.js'
import { ElMessage } from 'element-plus'
export default {
  name: 'UploadComp',
  setup() {
    const file = ref(null)
    const filename = ref('')
    const formData = new FormData()
    const imgUrl = ref('')
    const base64Reader = new FileReader()
    function getReaderResult() {
      imgUrl.value = base64Reader.result
    }
    onMounted(() => {
      base64Reader.addEventListener('load', getReaderResult)
    })

    onUnmounted(() => {
      base64Reader.addEventListener('load', getReaderResult)
    })

    function handleChange(e) {
      const selectedFile = file.value.files[0]
      console.log(e.target.files)
      console.log(file.value.files)
      filename.value = selectedFile.name
      formData.append('file', selectedFile)
      base64Reader.readAsDataURL(selectedFile)
    }

    // formdata表单上传文件
    async function testServer() {
      await selfServer.post('/upload', formData)
      ElMessage({
        message: '成功上传文件',
        type: 'success'
      })
    }

    // base64编码
    function base64Upload() {
      const fileBase64 = imgUrl.value.split(',')[1]
      console.log(imgUrl.value.split(',')[1])
      selfServer.post('/upload', {file: fileBase64})
    }

    function upload() {
      file.value.click()
    }
    return {
      file,
      upload,
      handleChange,
      filename,
      testServer,
      imgUrl,
      base64Upload
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
img {
  width: 300px;
}
</style>
