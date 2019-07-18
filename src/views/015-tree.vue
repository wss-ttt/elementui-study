<template>
	<div class="box">
		<el-tree 
		ref="myTree"
		:data="data" 
		show-checkbox 
		node-key="id" 
		@current-change="currentChangeHandle"
		:default-expand-all="true"
		:props="defaultProps">
		</el-tree>
		<hr>
		<el-button @click="setCurrentNode">选中节点</el-button>
	</div>
</template>

<script>
	export default {
		data() {
			return{
				data:[
					{
						id:1,
						name:'张三'
					},
					{
						id:2,
						name:'乔峰'
					},
					{
						id:3,
						name:'杨过'
					},
				],
				defaultProps: {
					children: 'children',
					label: 'name'
				}
			}
		},
		methods:{
			currentChangeHandle(data,node){
				console.log(data);
				console.log(node);
			},
			setCurrentNode(){
				console.log(1)
			}
		}
	};
</script>

<style>
</style>
