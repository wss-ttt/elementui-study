<template>
  <div class="wrapper">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
    <el-button type="success" @click="exportData">导出</el-button>
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
    exportData() {
      import('@/vendor/Export2Excel').then(excel => {
        // excel中表头的名称
        const tHeader = ['地址', '姓名', '日期']
        // tableData的属性名
        const filterVal = ['address', 'name', 'date']
        const list = this.tableData
        const data = this.formatJson(filterVal, list)
        console.log('data', data)
        excel.export_json_to_excel({
          header: tHeader, //Header Required
          data: data, //Specific data Required
          filename: 'excel-list', //Optional
          autoWidth: true, //Optional
          bookType: 'xlsx' //Optional
        })
      })
    },
    // 对json格式的数据进行格式化成excel支持的格式
    formatJson(filterVal, jsonData) {
      return jsonData.map(v =>
        filterVal.map(j => {
          return v[j]
        })
      )
    }
  }
}
</script>
<style scoped>
</style>