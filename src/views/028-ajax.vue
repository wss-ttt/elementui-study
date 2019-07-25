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
				<el-button @click="qs">使用qs进行序列化</el-button>
				<el-button type="primary" @click="addOrUpdateHandle()">新增</el-button>
				<el-button type="danger" @click="deleteHandle()" :disabled="dataListSelections.length <= 0">批量删除</el-button>
			</el-form-item>
		</el-form>
		<el-table v-loading="tableLoading" :data="dataList" border @selection-change="handleSelectionChange">
			<el-table-column type="selection" align="center" width="50">
			</el-table-column>
			<el-table-column label="编号" prop="id" align="center"></el-table-column>
			<el-table-column label="姓名" prop="name" align="center"></el-table-column>
			<el-table-column label="性别" prop="age" align="center"></el-table-column>
			<el-table-column fixed="right" align="center" width="150" label="操作">
				<template slot-scope="scope">
					<el-button type="text" size="small" @click="addOrUpdateHandle(scope.row.id)">修改</el-button>
					<el-button type="text" size="small" @click="deleteHandle(scope.row.id)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<addOrUpdate v-if="addOrUpdateVisible" ref="addOrUpdate" @refreshDataList="getDataList"></addOrUpdate>
	</div>
</template>

<script>
	import QS from 'qs'
	import addOrUpdate from './028-ajax-add-or-update'
	export default {
		name: '',
		data() {
			return {
				baseUrl: 'https://www.easy-mock.com/mock/5d22e06ce6f04f21fc5b6be7',
				dataForm: {
					naem: '', // 用户名
				},
				addOrUpdateVisible: false, // 控制弹框的显示和隐藏
				dataList: [],
				tableLoading: false, // loading效果
				dataListSelections: [], // 都选
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
				var ids = id ? [id] : this.dataListSelections.map(item => {
				  return item.id;
				});
				console.log(ids);
				this.$confirm('确定要删除当前数据吗?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					/* var data = {
						id: ids
					}; */
					this.$ajax({
						url: 'http://localhost:3000/students/delete',
						method: 'get',
						params: {
							id:ids
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
						} else {
							this.$message.error(data.message)
						}
					});
				});

			},
			addOrUpdateHandle(id) {
				this.addOrUpdateVisible = true; // 显示弹框
				this.$nextTick(() => {
					this.$refs['addOrUpdate'].init(id);
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
				var data = {
					id: 1,
					name: '关羽',
					age: 18
				};
				this.$ajax({
					url: 'http://localhost:3000/test',
					method: 'post',
					// data:data,     // 这种写法参数传递不过去
					data: QS.stringify(data),
					// 设置请求头信息
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					}
				}).then(res => {
					console.log(res);
				});
			},
			qs() {
				var data = {
					id: 1,
					name: '乔峰'
				};

				var res = QS.stringify(data);
				console.log(res);

				var data2 = 'id=1&name=zhangsan&age=18';

				var res2 = QS.parse(data2);

				console.log(res2);
				console.log('---------------');
				var res3 = JSON.stringify(data);
				console.log(typeof res3);
			},
			handleSelectionChange(val) {
				this.dataListSelections = val;
			}
		},
		components: {
			addOrUpdate
		}
	}
</script>

<style>
</style>
