<template>
  <div class="wrapper">
    <el-table :data="tableData" :span-method="objectSpanMethod" border style="width: 100%; margin-top: 20px">
      <el-table-column prop="id" label="ID" width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名">
      </el-table-column>
      <el-table-column prop="sequene" label="相序">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {
        tableData: [{
          id: '1',
          name: '张三',
          sequene: 'A相'
        }, {
          id: '1',
          name: '张三',
          sequene: 'B相'
        }, {
          id: '1',
          name: '张三',
          sequene: 'C相'
        }, {
          id: '2',
          name: '李四',
          sequene: 'A相'
        }, {
          id: '2',
          name: '李四',
          sequene: 'B相'
        }, {
          id: '2',
          name: '李四',
          sequene: 'C相'
        }]
      }
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    activated() {},
    deactivated() {},
    updated() {},
    destroyed() {},
    methods: {
      objectSpanMethod({
        row,
        column,
        rowIndex,
        columnIndex
      }) {
        if (columnIndex === 1 || columnIndex === 0) {
          if (rowIndex % 3 === 0) { // 
            return {
              rowspan: 3,
              colspan: 1
            };
          } else {
            return {
              rowspan: 0,
              colspan: 0
            };
          }
        }
      }
    },
    filters: {}
  }

</script>
<style scoped>
</style>
