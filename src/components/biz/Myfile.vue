<template>
  <el-table :data="tableData" empty-text="暂无数据">
    <!--
      1. uid
      2.文件名
      3.文件大小
      4.文件url
      5.文件最近更新时间
      6.（下载，复制分享链接）
    -->
    <el-table-column prop="filename" label="文件名" width="150"></el-table-column>
    <el-table-column prop="fileSize" label="文件大小" width="150"></el-table-column>
    <el-table-column label="文件链接" width="300">
      <template #default="scope">
        <div>
          <el-tooltip :content="scope.row.fileUrl" placement="bottom" effect="light">
            <el-button size="small">文件链接</el-button>
          </el-tooltip>
        </div>
      </template>
    </el-table-column>
    <el-table-column prop="latestUpdateTime" label="最近修改时间" width="150"></el-table-column>
    <el-table-column label="操作" width="200">
      <template #default="scope">
        <el-button type="primary" size="small" @click="download(scope)">下载</el-button>
        <el-button type="primary" size="small" @click="copyShareLink(scope)"
          >复制分享链接</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
export default {
  name: 'MyfileComp',
  setup() {
    const tableData = ref([
      {
        uid: '1',
        filename: 'qq截图',
        fileSize: '20k',
        fileUrl: 'http://127.0.0.1:8080/test.txt',
        latestUpdateTime: '2024/4/9'
      },
      {
        uid: '2',
        filename: '微信截图',
        fileSize: '20k',
        fileUrl: 'https://www.zhihu.com',
        latestUpdateTime: '2024/4/9'
      },
      {
        uid: '3',
        filename: 'snipate截图',
        fileSize: '20k',
        fileUrl: 'https://www.yuque.com',
        latestUpdateTime: '2024/4/9'
      },
      {
        uid: '4',
        filename: 'tim截图',
        fileSize: '20k',
        fileUrl: 'https://www.heishenhua.com',
        latestUpdateTime: '2024/4/9'
      }
    ])

    function copyShareLink(lineInfo) {
      console.log('开始复制链接到粘贴板')
      console.log(lineInfo)
      navigator.clipboard
        .writeText(lineInfo.row.fileUrl)
        .then(() => console.log('链接已成功写入到剪贴板'))
        .catch((err) => console.error('写入剪贴板失败；', err))
      ElMessage({
        message: lineInfo.row.fileUrl + '已复制到粘贴板',
        type: 'success'
      })
    }

    function download(lineInfo) {
      console.log('开始下载文件')
      
    }

    return { tableData, copyShareLink, download }
  }
}
</script>
