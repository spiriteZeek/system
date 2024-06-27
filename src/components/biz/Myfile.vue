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
    <el-table-column prop="fileUpdateTime" label="最近修改时间" width="150"></el-table-column>
    <el-table-column label="操作" width="200">
      <template #default="scope">
        <el-button type="primary" size="small" @click="download(scope)">下载</el-button>
        <el-button type="primary" size="small" @click="copyShareLink(scope)"
          >复制分享链接</el-button
        >
      </template>
    </el-table-column>
  </el-table>
  <el-pagination @next-click="nextClick" @prev-click="prevClick" @current-change="pageChange" v-model:current-page="currentPage" small background layout="prev, pager, next" :total="total" class="mt-4" />
</template>
<script>
import { onMounted, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { mockHttp } from '@/http/axios.js'
export default {
  name: 'MyfileComp',
  setup() {
    const tableData = ref()

    const currentPage = ref(1)
    const total = ref(0)
    const SIZE = 20;

    async function getTableData(size, curPage) {
      const { data: res } = await mockHttp.get('/img/list', {
        params: {
          pageSize: size,
          pagNum: curPage
        }
      })
      console.log(res.data)
      tableData.value = res.data.items
      total.value = res.data.totalSize
    }

    onMounted(async () => {
      // 分页查询的两个参数
      getTableData(SIZE, currentPage.value)
    })

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

    function pageChange(curPage) {
      console.log(curPage)
      getTableData(SIZE, curPage)
    }

    function prevClick(curPage) {
      console.log("向前挪一格")
    }

    function nextClick(curPage) {
      console.log("向后挪一格")
    }


    function download(lineInfo) {
      console.log('开始下载文件')
    }

    return { tableData, copyShareLink, download, total, currentPage, pageChange, nextClick, prevClick }
  }
}
</script>
