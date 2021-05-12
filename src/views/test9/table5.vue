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
        tableData: [],
        colspan: ['id', 'name'],
        spanArr: [],
        position: 0
      }
    },
    computed: {},
    watch: {},
    created() {},
    async mounted() {
      await this.getList()
      this.rowspan()
    },
    activated() {},
    deactivated() {},
    updated() {},
    destroyed() {},
    methods: {
      getList() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            this.tableData = [{
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
            }, {
              id: '3',
              name: '王五',
              sequene: 'A相'
            }, {
              id: '3',
              name: '王五',
              sequene: 'B相'
            }, {
              id: '4',
              name: '杨过',
              sequene: 'A相'
            }, {
              id: '4',
              name: '杨过',
              sequene: 'B相'
            }, {
              id: '4',
              name: '杨过',
              sequene: 'C相'
            }]
            resolve()
          }, 1000)
        })
      },
      rowspan() {
        //每次调用清空数据
        this.spanArr = [];
        this.position = 0
        this.tableData.forEach((item, index) => {
          if (index === 0) {
            this.spanArr.push(1);
            this.position = 0;
          } else {
            // id 为需要合并查询的项
            if (this.tableData[index].id === this.tableData[index - 1].id) {
              this.spanArr[this.position] += 1;
              this.spanArr.push(0);
            } else {
              this.spanArr.push(1);
              this.position = index;
            }
          }
        })
      },
      objectSpanMethod({
        row,
        column,
        rowIndex,
        columnIndex
      }) {
        // if (columnIndex === 1 || columnIndex === 0) {
        /* if (column['property'] === 'id' || column['property'] === 'name') {
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
        } */

        // 这种是每3行进行合并, 必须要求数据3行一组
        /* if (this.colspan.includes(column['property'])) {
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
        } */
        if (this.colspan.includes(column['property'])) {
          const _row = this.spanArr[rowIndex];
          const _col = _row > 0 ? 1 : 0;
          return {
            rowspan: _row,
            colspan: _col
          }
        }
      }
    },
    filters: {}
  }

</script>
<style scoped>
</style>
