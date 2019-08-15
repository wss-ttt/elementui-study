<template>
	<div class="box">
		<el-table v-loading="tableLoading" :data="dataList">
			<el-table-column label="编号" prop="id"></el-table-column>
			<el-table-column label="姓名" prop="name"></el-table-column>
			<el-table-column label="性别" prop="sex"></el-table-column>
		</el-table>
	</div>
</template>
<script>
	export default{
		name:'tableBox',
		data(){
			return{
				tableLoading:false,    // loading效果
				dataList:[]    // 存放表格数据
			}
		},
		mounted(){
			this.getDataList();
		},
		methods:{
			getDataList(){
				this.tableLoading = true;   // 显示loading图标
				this.$ajax({
					url:process.env.HOST+'/user/list',
					method:'get'
				}).then(({data})=>{
					if(data.code === 0){
						this.tableLoading = false;   // 隐藏loading图标
						this.dataList = data.data;  //保存返回的数据
					}
				});
			}
		}
	}
</script>

<style>
</style>
