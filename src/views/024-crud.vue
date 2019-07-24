<template>
	<div class="box">
		<h2 style="text-align: center;">学生信息管理系统</h2>
		<div class="toolbar">
			<el-button @click="addOrUpdate">新增</el-button>
		</div>
		<el-table :data="tableDataList" border>
			<el-table-column label="身份证号" prop="id"></el-table-column>
			<el-table-column label="姓名" prop="id"></el-table-column>
			<el-table-column label="性别" prop="sex"></el-table-column>
			<el-table-column label="年龄" prop="age"></el-table-column>
			<el-table-column label="专业" prop="major"></el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button size="mini" @click="addOrUpdate(scope.row.id)">修改</el-button>
					<el-button size="mini" type="danger" @click="delete(scope.row.id)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<addOrUpdate v-if="dialogVisible" ref="addOrUpdate"></addOrUpdate>
	</div>
</template>

<script>
	import addOrUpdate from './024-curd-add-or-update'
	import students from '@/assets/students.json'
	export default {
		name: '',
		data() {
			return {
				tableDataList: [], // 表格数据
				// 专业的字典数据
				majorDictData: [
					'计算机应用专业',
					'机械专业',
					'英语专业'
				],
				dialogVisible:false,  // 控制弹框的显示和隐藏
			}
		
		},
		mounted(){
			console.log(students);
			this.tableDataList = students;
		},
		methods:{
			// 新增和修改
			addOrUpdate(id){
				this.dialogVisible = true;
				this.$nextTick(()=>{
					this.$refs['addOrUpdate'].init(id);
				});
			},
			// 删除
			delete(){
				
			}
		},
		components:{
			addOrUpdate
		}
	}
</script>

<style>
</style>
