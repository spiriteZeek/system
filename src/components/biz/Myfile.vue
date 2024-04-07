<template>
  <div>上传文件</div>
  <el-button @click="upload">
    上传文件
    <input @change="handleChange" ref="file" id="fileInput" type="file" />
  </el-button>
  <div>
    <el-tag id="filename" type="primary" v-show="filename">{{ filename }}</el-tag>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'MyfileComp',
  setup() {
    const file = ref(null)
    const filename = ref('')
    function handleChange(e) {
      console.log(e.target.files)
      console.log(file.value.files)
      filename.value = file.value.files[0].name
    }
    function upload() {
      file.value.click()
    }
    return {
      file,
      upload,
      handleChange,
      filename
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
