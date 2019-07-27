<template>
	<div class="box">
		<el-tree 
		ref="myTree"
		:data="data" 
		node-key="ad" 
		show-checkbox
		:default-expand-all="true"
		:highlight-current="true"
		:props="defaultProps">
		</el-tree>
		<el-button @click="currentNodeCheck">设置高亮</el-button>
		<el-button @click="getNodeInfo">获取当前节点的信息</el-button>
	</div>
</template>

<script>
	export default {
		data() {
			return{
				data:[
					{
						id:1,
						ad:'a',
						name:'张三'
					},
					{
						id:2,
						ad:'b',
						name:'乔峰'
					},
					{
						id:3,
						ad:'c',
						name:'杨过'
					},
					{
						id:4,
						ad:'d',
						name:'杨过'
					},
				],
				defaultProps: {
					children: 'children',
					label: 'name'
				}
			}
		},
		mounted(){
		},
		methods:{
			currentNodeCheck(){
				// 高亮显示
				this.$refs['myTree'].setCurrentKey('e');
				// 选中
				// this.$refs['myTree'].setChecked('c',true)
			},
			getNodeInfo(){
				var node = this.$refs['myTree'].getCurrentNode();
				var name = this.$refs['myTree'].getCurrentNode()['name'];
				console.log(node);
				console.log(name);
			}
		}
	};
</script>

<style>
</style>
