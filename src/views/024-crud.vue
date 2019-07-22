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
	export default {
		name: '',
		data() {
			return {
				tableDataList: [{
						"id": "120000199003079497",
						"name": "康娟",
						"sex": "男",
						"age": 25,
						"major": 0,
					},
					{
						"id": "230000198207094673",
						"name": "姜超",
						"sex": "男",
						"age": 21,
						"major": 0,
					},
					{
						"id": "500000200710154624",
						"name": "郝平",
						"sex": "男",
						"age": 28,
						"major": 0,
					},
					{
						"id": "220000199705197416",
						"name": "董艳",
						"sex": "男",
						"age": 17,
						"major": 0,
					},
					{
						"id": "35000019900323666X",
						"name": "潘磊",
						"sex": "男",
						"age": 25,
						"major": 0,
					},
					{
						"id": "520000201405200100",
						"name": "刘艳",
						"sex": "男",
						"age": 22,
						"major": 0,
					},
					{
						"id": "510000197803257574",
						"name": "宋强",
						"sex": "男",
						"age": 12,
						"major": 0,
					},
					{
						"id": "150000197906197562",
						"name": "程芳",
						"sex": "男",
						"age": 23,
						"major": 0,
					},
					{
						"id": "500000198707213961",
						"name": "梁磊",
						"sex": "男",
						"age": 24,
						"major": 1,
					},
					{
						"id": "410000198007024324",
						"name": "廖秀英",
						"sex": "男",
						"age": 22,
						"major": 2,
					}
				], // 表格数据
				// 专业的字典数据
				majorDictData: [
					'计算机应用专业',
					'机械专业',
					'英语专业'
				],
				dialogVisible:false,  // 控制弹框的显示和隐藏
			}
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
