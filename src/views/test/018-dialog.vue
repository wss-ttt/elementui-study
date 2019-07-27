<template>
	<div class="box">
		<el-button @click="add">新增</el-button>
		<el-dialog title="新增" :visible.sync="dialogVisible">
			<el-form :model="dataForm" :rules="rules" ref="dataForm">
				<el-form-item>
					<el-radio-group v-model="dataForm.type">
						<el-radio label="员工"></el-radio>
						<el-radio label="学生"></el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="姓名" prop="name">
					<el-input v-model="dataForm.name" placeholder="姓名"></el-input>
				</el-form-item>
				<el-form-item label="性别" prop="sex">
					<el-input v-model="dataForm.sex" placeholder="性别"></el-input>
				</el-form-item>
				<el-form-item label="职业" prop="work" v-if="dataForm.type === '员工'">
					<el-input v-model="dataForm.work" placeholder="职业"></el-input>
				</el-form-item>
				<el-form-item label="专业" prop="major" v-if="dataForm.type === '学生'">
					<el-input v-model="dataForm.major"></el-input>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="onSubmit">确 定</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				dialogVisible: false,
				employeesList: [], // 保存员工数据
				studentsList: [], // 保存学生数据
				dataList: [], // 存放数据
				dataForm: {
					type: '员工', // 类别: 学生还是员工
					name: '', // 姓名
					sex: '', // 性别
					work: '', // 工作
					major: '', // 专业
				},
				rules: {
					name: [{
						required: true,
						message: '请输入姓名',
						trigger: 'blur'
					}, ],
					sex: [{
						required: true,
						message: '请输入性别',
						trigger: 'blur'
					}, ],
					work: [{
						required: true,
						message: '请输入职业',
						trigger: 'blur'
					}, ],
					major: [{
						required: true,
						message: '请输入专业',
						trigger: 'blur'
					}, ],
				}
			}
		},
		methods: {
			add() {
				this.dialogVisible = true;
				/* this.$nextTick(() => {
					this.$refs['dataForm'].resetFields(); // 重置表单
				}) */
			},
			cancel(){
				/* this.dialogVisible = false;
				console.log(this.dataForm.name); */
			},
			onSubmit() {
				// this.$refs['dataForm'].resetFields();
				this.$refs['dataForm'].validate((valid) => {
					if (valid) {
						if (this.dataForm.type === '员工') {
							this.employeesList.push({
								name: this.dataForm.name,
								sex: this.dataForm.sex,
								work: this.dataForm.work
							});

						} else {
							this.studentsList.push({
								name: this.dataForm.name,
								sex: this.dataForm.sex,
								major: this.dataForm.major
							});
						}
						this.$message({
							message: '操作成功',
							type: 'success',
							duration: 1500,
							onClose: () => {
								this.dialogVisible = false
							}
						})
						console.log('员工列表', this.employeesList);
						console.log('学生列表', this.studentsList);
					} else {
						return false;
					}
				});
			}
		}

	}
</script>

<style>
</style>
