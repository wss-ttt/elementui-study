<template>
	<el-dialog title="新增" :visible.sync="visible">
		<el-form :model="dataForm" ref="dataForm" :rules="rules" label-width="80px">
			<el-form-item prop="name" label="姓名">
				<el-input placeholder="姓名" v-model="dataForm.name"></el-input>
			</el-form-item>
			<el-form-item prop="age" label="年龄">
				<el-input-number v-model="dataForm.age">
					</el-el-input-number>
				</el-input-number>
			</el-form-item>
		</el-form>
		<span slot="footer" class="dialog-footer">
			<el-button @click="visible = false">取消</el-button>
			<el-button type="primary" @click="dataFormSubmit()">确定</el-button>
		</span>
	</el-dialog>
</template>

<script>
	import QS from 'qs'
	export default {
		name: '',
		data() {
			return {
				visible: false, // 控制显示和隐藏的
				dataForm: {
					id: '', // 编号(主键) 数据库中子增长
					name: '', // 姓名
					age: 18, // 年龄
				},
				rules: {
					name: [{
						required: true,
						message: '姓名不能为空',
						trigger: 'blur'
					}],
					age: [{
						required: true,
						message: '年龄不能为空',
						trigger: 'blur'
					}],
				}
			}
		},
		methods: {
			init(id) {
				this.dataForm.id = id || '';
				this.visible = true;
				this.$nextTick(() => {
					this.$refs['dataForm'].resetFields();
				});
				// 说明是有id 就是修改操作
				if (this.dataForm.id) {
					// 需要进行回显数据 
					this.$ajax({
						// 以下两种方式传递参数都是可以的
						url: `http://localhost:3000/students/details?id=${this.dataForm.id}`,
						method: 'get',
						/* params: {
							id: this.dataForm.id
						} */
					}).then(({
						data
					}) => {
						this.dataForm.name = data.data.name;
						this.dataForm.age = data.data.age;
					});
				}
			},
			// 点击按钮进行表单提交
			dataFormSubmit() {
				this.$refs['dataForm'].validate((valid) => {
					if (valid) {
						var data = {
							id: this.dataForm.id || undefined, //  为undefined 就不会传递该参数
							name: this.dataForm.name,
							age: this.dataForm.age,
						};
						this.$ajax({
							// url: 'http://localhost:3000/students/add',
							// 通过id来判断是新增操作还是修改操作
							url: `http://localhost:3000/students/${this.dataForm.id?'update':'add'}`,
							method: 'post',
							data: QS.stringify(data)
						}).then(({
							data
						}) => {
							if (data && data.code === 0) {
								this.$message({
									message: '操作成功',
									type: 'success',
									duration: 1500,
									onClose: () => {
										this.visible = false;
										// 在子组件中自定义事件
										this.$emit('refreshDataList');
									}
								})
							}
						});
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
