<template>
  <div class="wrapper">
    <h2>动态表格</h2>
    <el-checkbox-group v-model="checkedColumn">
      <el-checkbox label="name">姓名</el-checkbox>
      <el-checkbox label="age">年龄</el-checkbox>
      <el-checkbox label="sex">性别</el-checkbox>
    </el-checkbox-group>
    <el-table :data="tableData" border>
      <el-table-column label="学号" prop="id"></el-table-column>
      <el-table-column lable="备注" v-for="item in tableHeader" :key="item.value" :label="item.label">
        <template slot-scope="scope">{{scope.row[item.value]}}</template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
const HEADER = [
  {
    label: '姓名',
    value: 'name'
  },
  {
    label: '年龄',
    value: 'age'
  },
  {
    label: '性别',
    value: 'sex'
  }
]
export default {
  props: {},
  data() {
    return {
      // 表格数据
      tableData: [
        {
          id: 1,
          name: '乔峰',
          age: 18,
          sex: '男'
        },
        {
          id: 2,
          name: '小龙女',
          age: 28,
          sex: '女'
        },
        {
          id: 3,
          name: '杨过',
          age: 38,
          sex: '男'
        }
      ],
      // 表头数据
      tableHeader: HEADER,
      checkedColumn: []
    }
  },
  computed: {},
  components: {},
  created() {},
  mounted() {
    HEADER.forEach(item => {
      this.checkedColumn.push(item.value)
    })
  },
  destroyed() {},
  watch: {
    checkedColumn: {
      handler(newVal, oldVal) {
        // 这里是一个双重循环
        this.tableHeader = HEADER.filter(item => {
          for (let i of newVal) {
            if (i === item.value) {
              return item
            }
          }
        })
        console.log(this.tableHeader)
      }
    }
  },
  methods: {}
}
</script>
<style scoped>
</style>