<template>
  <div class="box">
    <el-table v-loading="tableLoading" :data="tableData" border style="width:100%;">
      <el-table-column label="编号" prop="date"></el-table-column>
      <el-table-column label="姓名" prop="name"></el-table-column>
      <el-table-column label="性别" prop="sex"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'tableBox',
  data() {
    return {
      tableLoading: false, // loading效果
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          sex:'男',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          sex:'男',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          sex:'男',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          sex:'男',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  },
  mounted() {},
  methods: {
    handleClick() {
      console.log('好好学习')
    }
  }
}
</script>

<style scopoed>
*{
    margin:0;
    padding:0;
}
.box {
  width: 100%;
  margin: 100px auto;
}
</style>
<style lang="scss">
.el-table th.gutter {
  display: table-cell !important;
}
</style>
