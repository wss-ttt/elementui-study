<template>
  <div class="box">
    <el-tree
      ref="myTree"
      :data="data"
      node-key="ad"
      :default-checked-keys="['e','f']"
      show-checkbox
      :default-expand-all="true"
      :highlight-current="true"
      :props="defaultProps"
    ></el-tree>
    <el-button @click="currentNodeCheck">设置高亮</el-button>
    <el-button @click="getNodeInfo">获取当前节点的信息</el-button>
    <el-button @click="menuIdInit">获取id</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          id: 1,
          ad: 'a',
          name: '张三'
        },
        {
          id: 2,
          ad: 'b',
          name: '乔峰'
        },
        {
          id: 3,
          ad: 'c',
          name: '杨过'
        },
        {
          id: 4,
          ad: 'd',
          name: '杨过',
          children: [
            {
              id: 5,
              ad: 'e',
              name: '刘备'
            },
            {
              id: 6,
              ad: 'f',
              name: '关羽',
              disabled: true,
              children: [
                {
                  id: 61,
                  ad: '61',
                  name: '大山',
                  children: [
                    {
                      id: 611,
                      ad: '611',
					  name: '周杰伦',
					  children:[
						  {
							  id:78,
							  ad:'78',
							  name:'方文山'
						  }
					  ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 98,
          ad: 'wss',
          name: '好好',
          disabled: true
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
    currentNodeCheck() {
      // 高亮显示
      this.$refs['myTree'].setCurrentKey('e')
      // 选中
      // this.$refs['myTree'].setChecked('c',true)
    },
    getNodeInfo() {
      var node = this.$refs['myTree'].getCurrentNode()
      var name = this.$refs['myTree'].getCurrentNode()['name']
      console.log(node)
      console.log(name)
    },
    menuIdInit() {
      var _this = this
      var _menu = _this.data
      var menuId = []
      var len = _menu.length
      for (var i = 0; i < len; i++) {
        var item = _menu[i]
        if (item.children && item.children.length != 0) {
          var child = item.children
          for (var j = 0; j < child.length; j++) {
            _menu[len + j] = child[j]
          }
          len = _menu.length
		}
        menuId.push(item.id)
	  }
	  console.log(_menu)
	  console.log(menuId)
	  
	  for(let i =0;i< _menu.length;i++){
		  if(_menu[i].name === '方文山'){
			  console.log('id',_menu[i].id)
			  break
		  }
	  }
	  // 需求是找出name为乔峰的id
	},
	getUser(){
	}
  }
}
</script>

<style>
</style>
