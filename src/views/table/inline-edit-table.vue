<template>
  <div class="wrapper">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <!-- <el-table-column prop="address" label="地址"></el-table-column> -->
      <el-table-column>
        <template slot-scope="scope">
          <template v-if="scope.row.edit">
            <el-input v-model="scope.row.address"></el-input>
          </template>
          <span v-else>{{scope.row.address}}</span>
        </template>
      </el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <template v-if="scope.row.edit">
            <el-button @click="ok(scope)" type="success">确定</el-button>
            <el-button @click="cancel(scope)" type="danger">取消</el-button>
          </template>
          <el-button v-else @click="edit(scope)">编辑</el-button>
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
          name: '乔峰',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '杨过',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '小龙女',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '黄蓉',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  },
  computed: {},
  components: {},
  created() {},
  updated() {
    console.log('数据更新', this.tableData)
  },
  mounted() {},
  destroyed() {},
  watch: {},
  methods: {
    // 编辑
    edit(scope) {
      // 添加一个edit属性
      this.$set(this.tableData[scope.$index], 'edit', true)
      // 添加一个originAddress属性，用于保存原始的地址数据
      this.$set(this.tableData[scope.$index],'originAddress',scope.row.address)
    },
    // 确定
    ok(scope) {
      this.$set(this.tableData[scope.$index], 'edit', false)
    },
    // 取消
    cancel(scope) {
      this.$set(this.tableData[scope.$index], 'edit', false)
      // 数据还原
      this.$set(this.tableData[scope.$index], 'address', scope.row.originAddress  )
    }
  }
}
</script>
<style scoped>
.info {
  line-height: 26px;
  border: 1px solid #ccc;
  padding: 15px;
}
</style>