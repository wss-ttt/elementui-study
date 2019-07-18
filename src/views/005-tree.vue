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
			return {
				data: [{
					id: 1,
					name: '一级 1',
					children: [{
						id: 4,
						name: '二级 1-1',
						children: [{
							id: 9,
							name: '三级 1-1-1'
						}, {
							id: 10,
							name: '三级 1-1-2'
						}]
					}]
				}, {
					id: 2,
					name: '一级 2',
					children: [{
						id: 5,
						name: '二级 2-1'
					}, {
						id: 6,
						name: '二级 2-2'
					}]
				}, {
					id: 3,
					name: '一级 3',
					children: [{
						id: 7,
						name: '二级 3-1'
					}, {
						id: 8,
						name: '二级 3-2'
					}]
				}],
				defaultProps: {
					children: 'children',
					label: 'name'
				}
			};
		},
		methods:{
			currentChangeHandle(data,node){
				console.log(data);
				console.log(node);
			},
			setCurrentNode(){
				console.log(1)
				// this.$refs['myTree'].setCurrentKey(7); //setCurrentKey
				this.$refs['myTree'].setChecked(4,true,true)
				console.log(this.$refs['myTree'].getCurrentNode());
			}
		}
	};
</script>

<style>
</style>
