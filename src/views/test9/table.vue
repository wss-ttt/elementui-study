<template>
  <div>
    <div>
      <label>请选择表格需要展示的列：</label>
      <el-checkbox-group v-model="checkedTableColumns">
        <el-checkbox
          v-for="column in tableColumns"
          :key="column.prop"
          :label="column.prop"
        >{{ column.label }}</el-checkbox>
      </el-checkbox-group>
    </div>
    <div class="select-column">
      <el-popover placement="bottom" title="" width="200" trigger="click">
        <div class="content">
          <el-checkbox-group v-model="checkedTableColumns">
            <el-checkbox
              v-for="column in tableColumns"
              :key="column.prop"
              :label="column.prop"
            >{{ column.label }}</el-checkbox>
          </el-checkbox-group>
        </div>
        <el-button slot="reference">列名选择</el-button>
        <!-- <button slot="reference">列名选择</button> -->
      </el-popover>
    </div>
    <el-table :data="tableData" border>
      <el-table-column
        v-for="column in bindTableColumns"
        :key="column.prop"
        :prop="column.prop"
        :label="column.label"
      ></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  components: {},
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
        }
      ],
      tableColumns: [
        {
          prop: 'date',
          label: '日期',
          show: true
        },
        {
          prop: 'name',
          label: '姓名',
          show: true
        },
        {
          prop: 'address',
          label: '地址',
          show: true
        }
      ]
    }
  },
  computed: {
    bindTableColumns() {
      // 过滤table需要显示的列(字段)
      return this.tableColumns.filter(column => column.show)
    },
    /* 这里使用了getter和setter，这样写的好处不用自己手动监听复选框的选中事件 */
    checkedTableColumns: {
      get() {
        // 返回选中的列名el-checkbox-group
        return this.bindTableColumns.map(column => column.prop) // 这里只需要返回prop值
      },
      set(checked) {
        // 设置表格列的显示与隐藏
        this.tableColumns.forEach((column, index) => {
          // 如果选中，则设置列显示
          if (checked.includes(column.prop)) {
            column.show = true
          } else {
            // 如果未选中，则设置列隐藏
            column.show = false
          }
        })
      }
    }
  },
  watch: {},
  created() {},
  mounted() {},
  activated() {},
  deactivated() {},
  updated() {},
  destroyed() {},
  methods: {},
  filters: {}
}
</script>
<style scoped>
.select-column {
  float: right;
}
.el-checkbox-group {
  /* display: flex; */
  /* flex-direction: column; */
}
</style>