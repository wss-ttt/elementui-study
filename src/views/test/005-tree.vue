<template>
	<div class="box">
		<el-tree 
		ref="myTree"
		:data="data" 
		show-checkbox 
		node-key="id" 
		@current-change="currentChangeHandle"
		:highlight-current="true"
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
		mounted(){
			// this.setCurrentNode();
		},
		methods:{
			currentChangeHandle(data,node){
				console.log(data);
				console.log(node);
			},
			setCurrentNode(){
				
				// this.$refs['myTree'].setCurrentKey(7); //setCurrentKey
				this.$refs['myTree'].setCurrentKey(3);

				// setChecked的第三个参数是用那个设置子节点是否被勾选 默认是false不被勾选
				// this.$refs['myTree'].setChecked(4,true,false)
				// this.$refs['myTree'].setChecked(4,true,true)
				this.$refs['myTree'].setCheckedKeys([4]) // 也能选中
			}
		}
	};
</script>

<style>
</style>
