<template>
  <div class="wrapper">
    <div class="header"></div>
    <div class="left"></div>
    <div class="content-main">
      <div class="content">
        <el-table v-loading="tableLoading" :data="dataList" border stripe :max-height="tableHeight">
          <el-table-column label="编号" prop="id"></el-table-column>
          <el-table-column label="姓名" prop="name"></el-table-column>
          <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
              <el-button type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'tableBox',
  data() {
    return {
      tableLoading: false, // loading效果
      dataList: [], // 存放表格数据
      clientHeight:document.documentElement['clientHeight']
    }
  },
  computed: {
    tableHeight: {
      get() {
        return this.clientHeight - 80 - 30
      },
      set(val) {
        this.clientHeight = val
      }
    }
  },
  mounted() {
    this.getDataList()
    window.addEventListener('resize', () => {
      this.clientHeight = document.documentElement['clientHeight']
    })
  },
  methods: {
    getDataList() {
      this.tableLoading = true // 显示loading图标
      this.$ajax({
        // url:process.env.HOST+'/user/list',
        url: 'http://localhost:3000/users/list',
        method: 'get'
      }).then(data => {
        this.tableLoading = false // 隐藏loading图标
        this.dataList = data.data //保存返回的数据
      })
    },
    handleClick() {}
  }
}
</script>
<style scoped lang="scss">
.wrapper {
  height: 100%;
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    background-color: aqua;
    z-index: 22;
  }
  .left {
    position: fixed;
    top: 80px;
    left: 0;
    bottom: 0;
    width: 220px;
    background-color: azure;
  }
  .content-main {
    height: 100%;
    padding-top: 80px;
    margin-left: 220px;
    background-color: #ccc;
    .content {
      height: 100%;
      overflow: auto;
      padding: 15px;
    }
  }
}
</style>
