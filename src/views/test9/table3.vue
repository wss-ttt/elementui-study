<template>
  <div>
    <div>
      <label>请选择表格需要展示的列：</label>
      <el-checkbox-group v-model="checkedBoxList">
        <el-checkbox
          v-for="column in ctrlArr"
          :key="column.prop"
          :label="column.prop"
        >{{ column.label }}</el-checkbox>
      </el-checkbox-group>
    </div>
    <div class="select-column">
      <el-popover placement="bottom" title width="200" trigger="click">
        <div class="content">
          <el-checkbox-group v-model="checkedBoxList">
            <el-checkbox
              v-for="column in ctrlArr"
              :key="column.prop"
              :label="column.prop"
            >{{ column.label }}</el-checkbox>
          </el-checkbox-group>
        </div>
        <el-button slot="reference">列名选择</el-button>
        <!-- <button slot="reference">列名选择</button> -->
      </el-popover>
    </div>
    <el-table ref="singleTable" :data="tableData" border>
      <el-table-column property="date" label="日期" width="300px" v-if="ctrlArr[0].show"></el-table-column>
      <el-table-column property="name" label="姓名" v-if="ctrlArr[1].show"></el-table-column>
      <el-table-column property="address" label="地址" v-if="ctrlArr[2].show"></el-table-column>
    </el-table>

    <!-- <el-checkbox-group v-model="checkList">
      <el-checkbox label="复选框 A"></el-checkbox>
      <el-checkbox label="复选框 B"></el-checkbox>
      <el-checkbox label="复选框 C"></el-checkbox>
      <el-checkbox label="禁用" disabled></el-checkbox>
      <el-checkbox label="选中且禁用" disabled></el-checkbox>
    </el-checkbox-group>-->
    <button type="button" @click="test">确定</button>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      checkList: ['选中且禁用', '复选框 A'],
      ctrlArr: [
        {
          prop: 'date',
          show: true,
          label: '日期'
        },
        {
          prop: 'name',
          show: true,
          label: '姓名'
        },
        {
          prop: 'address',
          show: true,
          label: '地址'
        }
      ],
      // 数据源
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
      ]
    }
  },
  computed: {
    bindTableColumns() {
      // 过滤table需要显示的列(字段)
      return this.ctrlArr.filter(column => column.show)
    },
    /* 这里使用了getter和setter，这样写的好处不用自己手动监听复选框的选中事件 */
    checkedBoxList: {
      get() {
        return this.bindTableColumns.map(column => column.prop) // 这里只需要返回prop值
        // return ['date', 'name'] // 只会有日期 姓名会被选中
      },
      set(checked) {
        // 设置表格列的显示与隐藏
        this.ctrlArr.forEach((column, index) => {
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
  methods: {
    handleChecked(val) {},
    test() {
      console.log('aa', this.checkList)
    }
  },
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