<template>
  <div>
    <div class="select-column">
      <el-popover placement="bottom" title="" width="200" trigger="click">
        <div class="content">
          <el-checkbox-group v-model="checkedTableColumns" @change="change">
            <el-checkbox v-for="column in tableColumns" :key="column.prop" :label="column.prop"
              :disabled="column.disabled">{{ column.label }}
            </el-checkbox>
          </el-checkbox-group>
        </div>
        <el-button slot="reference">列名选择</el-button>
      </el-popover>
    </div>
    <el-table :data="tableData" border @row-click="tableRowClick" @selection-change="selectionChange" stripe>
      <slot name="selection"></slot>
      <slot name="index"></slot>
      <el-table-column v-for="column in bindTableColumns" align="center" :key="column.prop" :prop="column.prop"
        :label="column.label" :width="column.width">
        <template slot-scope="scope">
          <span v-if="scope.column.property === 'monitiorState'"
            :style="{ 'color': statusColors[scope.row.monitiorState]}">
            {{ monitiorStateFormat(scope.row) }}
          </span>
          <span v-else-if="scope.column.property === 'name'" @click.stop="nameClick(scope.row)">
            {{ scope.row[scope.column.property] }}
          </span>
          <span v-else-if="scope.column.property === 'date'" @click.stop="dateClick(scope.row)">
            {{ scope.row[scope.column.property] }}
          </span>
          <span v-else>
            {{ scope.row[scope.column.property] }}
          </span>
        </template>
      </el-table-column>
      <slot name="operation"></slot>
    </el-table>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {
      tableData: {
        type: Array,
        default: () => []
      },
      tableColumns: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        minCheckdLen: 2, // 最小限制长度
        statusColors: this.$global.monitorColor,
        monitiorStateOption: [{
          dictValue: 0,
          dictLabel: '正常'
        }, {
          dictValue: 1,
          dictLabel: '异常'
        }, {
          dictValue: 2,
          dictLabel: '注意'
        }],
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
          // console.log('cc', this.bindTableColumns.map(column => column.prop))
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
    methods: {
      // 状态字段翻译
      monitiorStateFormat(row) {
        return this.selectDictLabel(this.monitiorStateOption, row.monitiorState)
      },
      // 回显字典数据
      selectDictLabel(datas, value) {
        const actions = [];
        Object.keys(datas).map((key) => {
          if (datas[key].dictValue == ('' + value)) {
            actions.push(datas[key].dictLabel);
            return false;
          }
        })
        return actions.join('');
      },
      tableRowClick(row) {
        this.$emit('row-click', row)
      },
      nameClick(row) {
        this.$emit('name-click', row)
      },
      dateClick(row) {
        this.$emit('date-click', row)
      },
      change() {
        if (this.checkedTableColumns.length <= this.minCheckdLen) {
          this.checkedTableColumns.forEach(item => {
            this.tableColumns.forEach(jtem => {
              if (item === jtem.prop) {
                jtem.disabled = true
              }
            })
          })
        } else {
          this.tableColumns.forEach(item => {
            item.disabled = false
          })
        }
      },
      selectionChange(selection) {
        this.$emit('selection-change', selection)
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
