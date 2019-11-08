<template>
  <div class="wrapper">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <el-button v-if="scope.row.edit" @click="ok(row)">确定</el-button>
          <el-button v-else @click="scope.row.edit = !scope.row.edit">编辑</el-button>
        </template>
      </el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <span>{{!scope.row.edit}}</span>
          <button @click="scope.row.edit = !scope.row.edit">确定</button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  },
  computed: {},
  components: {},
  created() {},
  mounted() {},
  destroyed() {},
  watch: {},
  methods: {
    edit(row) {
      row.edit = false
    }
  }
}
</script>
<style scoped>
</style>