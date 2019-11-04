<template>
  <div class="box">
    <el-tree
      ref="myTree"
      :data="data"
      show-checkbox
      node-key="id"
      :highlight-current="true"
      :default-expand-all="true"
      :props="defaultProps"
      check-strictly
      @check="checkGroupNode"
    ></el-tree>
    <hr />
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          id: 1,
          name: '一级 1',
          children: [
            {
              id: 4,
              name: '二级 1-1',
              children: [
                {
                  id: 9,
                  name: '三级 1-1-1'
                },
                {
                  id: 10,
                  name: '三级 1-1-2'
                }
              ]
            }
          ]
        },
        {
          id: 2,
          name: '一级 2',
          children: [
            {
              id: 5,
              name: '二级 2-1'
            },
            {
              id: 6,
              name: '二级 2-2'
            }
          ]
        },
        {
          id: 3,
          name: '一级 3',
          children: [
            {
              id: 7,
              name: '二级 3-1'
            },
            {
              id: 8,
              name: '二级 3-2'
            }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'name'
      }
    }
  },
  mounted() {},
  methods: {
    checkGroupNode(a, b) {
      if (b.checkedKeys.length > 0) {
        this.$refs['myTree'].setCheckedKeys([a.id])
      }
    }
  }
}
</script>

<style>
</style>
