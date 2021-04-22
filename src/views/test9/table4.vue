<template>
  <div class="wrapper">
    <v-table :tableData="list" :tableColumns="tableColumns" @row-click="rowClick" @name-click="nameClick" @date-click="dateClick">
      <el-table-column slot="index" label="序号" align="center" type="index" width="100" />
      <el-table-column slot="operation" label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </v-table>
  </div>
</template>

<script>
  import VTable from './components/table.vue'
  export default {
    components: {
      VTable
    },
    props: {},
    data() {
      return {
        list: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            monitiorState: 0,
            msg: '好好'
          },
          {
            date: '2016-05-04',
            name: '张三',
            address: '上海市普陀区金沙江路 1517 弄',
            monitiorState: 1,
            msg: '好好'
          },
          {
            date: '2016-05-01',
            name: '李四',
            address: '上海市普陀区金沙江路 1519 弄',
            monitiorState: 2,
            msg: '好好'
          }
        ],
        tableColumns: [{
            prop: 'date',
            label: '日期',
            show: true,
            width: '100',
            disabled: false
          },
          {
            prop: 'monitiorState',
            label: '状态',
            show: true,
            width: '100',
            disabled: false
          },
          {
            prop: 'name',
            label: '姓名',
            show: true,
            disabled: false
          },
          {
            prop: 'address',
            label: '地址',
            show: true,
            disabled: false
          },
        ]
      }
    },
    computed: {
    },
    watch: {},
    created() {},
    mounted() {},
    activated() {},
    deactivated() {},
    updated() {},
    destroyed() {},
    methods: {
      handleEdit(index, row) {
        console.log(index, row)
      },
      handleDelete(index, row) {
        console.log(index, row)
      },
      rowClick(row) {
        console.log('row', row)
      },
      nameClick(row) {
       console.log('点击name', row) 
      },
      dateClick(row) {
       console.log('点击date', row) 
      }
    },
    filters: {}
  }

</script>
<style scoped>
</style>
