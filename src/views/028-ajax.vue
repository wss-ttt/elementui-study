<template>
	<div class="box">
		<el-form :inline="true" :model="dataForm" @keyup.enter.native="getDataList()">
			<el-form-item>
				<el-input v-model="dataForm.name" placeholder="姓名" clearable></el-input>
			</el-form-item>
			<el-form-item>
				<el-button @click="getListByName">查询</el-button>
				<el-button @click="sendByPost">发送post请求</el-button>
				<el-button @click="sendByPost2">发送post请求2</el-button>
				<!-- <el-button type="primary" @click="addOrUpdateHandle()">新增</el-button> -->
				<!-- <el-button type="danger" @click="deleteHandle()" :disabled="dataListSelections.length <= 0">批量删除</el-button> -->
			</el-form-item>
		</el-form>
		<el-table v-loading="tableLoading" :data="dataList">
			<el-table-column label="编号" prop="id"></el-table-column>
			<el-table-column label="姓名" prop="name"></el-table-column>
			<el-table-column label="性别" prop="age"></el-table-column>
			<el-table-column fixed="right" header-align="center" align="center" width="150" label="操作">
				<template slot-scope="scope">
					<!-- <el-button type="text" size="small" @click="addOrUpdateHandle(scope.row.id)">修改</el-button> -->
					<el-button type="text" size="small" @click="deleteHandle(scope.row.id)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	export default {
		name: '',
		data() {
			return {
				baseUrl: 'https://www.easy-mock.com/mock/5d22e06ce6f04f21fc5b6be7',
				dataForm: {
					naem: '', // 用户名
				},
				dataList: [],
				tableLoading: false, // loading效果
			}
		},
		mounted() {
			this.getDataList();
		},
		methods: {
			getDataList() {
				this.tableLoading = true;
				this.$ajax({
					url: 'http://localhost:3000/students/list',
					method: 'get',
				}).then(({
					data
				}) => {
					if (data.code === 0) {
						console.log(data);
						this.tableLoading = false; // loading效果隐藏
						this.dataList = data.data;
					}
				});
			},
			getListByName() {
				this.tableLoading = true;
				this.$ajax({
					url: 'http://localhost:3000/students/getListByName',
					method: 'get',
					params: {
						name: this.dataForm.name
					}
				}).then(({
					data
				}) => {
					if (data.code === 0) {
						this.tableLoading = false; // loading效果隐藏
						this.dataList = data.data;
					}
				});
			},
			deleteHandle(id) {
				this.$confirm('确定要删除当前数据吗?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$ajax({
						url: 'http://localhost:3000/students/delete',
						method: 'post',
						data: {
							id: id,
							name:'wss'
						},
						// 设置请求头信息
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded'
						}
					}).then(({
						data
					}) => {
						if (data.code === 0) {
							this.$message({
								message: '操作成功',
								type: 'success',
								duration: 1500,
								onClose: () => {
									// 重新获取一遍数据
									this.getDataList();
								}
							})
						}else{
							this.$message.error(data.message)
						}
					});
				});

			},
			sendByPost() {
				this.$ajax({
					url: 'http://localhost:3000',
					method: 'post',
					data: {
						id: 1,
						name: '乔峰'
					},
					// 设置请求头信息
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					}
				}).then(res => {
					console.log(res);
				});

				// 发送post请求
				/* this.$ajax.post('http://localhost:3000',{
					id:1,
					name:'乔峰'
				},{
					headers: {'Content-Type': 'application/x-www-form-urlencoded'}
				}).then(res=>{
					console.log(res);
				}); */
			},
			sendByPost2() {
				this.$ajax.post('http://localhost:3000/test', {
					id: 1,
					name: '乔峰'
				},{
					headers: {'Content-Type': 'application/x-www-form-urlencoded'}
				}).then(res => {
					console.log(res);
				});
			}
		}
	}
</script>

<style>
</style>
