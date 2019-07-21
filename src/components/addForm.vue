<template>
	<el-dialog title="新增" :visible.sync="visible" width="50%">
		<el-form :model="dataForm" label-width="100px" ref="dataForm" :rules="rules">
			<el-form-item label="姓名" prop="name">
				<el-input placeholder="请输入姓名" v-model="dataForm.name"></el-input>
			</el-form-item>
			<el-form-item label="密码" prop="pwd">
				<el-input placeholder="请输入密码" v-model="dataForm.pwd"></el-input>
			</el-form-item>
		</el-form>
		<span slot="footer" class="dialog-footer">
			<el-button @click="visible = false">取 消</el-button>
			<el-button type="primary" @click="onSubmit">确 定</el-button>
		</span>
	</el-dialog>
</template>

<script>
	export default {
		name: 'addForm',
		data() {
			return {
				visible: false,
				dataForm: {
					name: '', // 姓名
					pwd: '', // 密码
				},
				rules:{
					name:[
						{
							required:true,
							message:'姓名不能为空',
							trigger:'blur'
						}
					],
					pwd:[
						{
							required:true,
							message:'密码不能为空',
							trigger:'blur'
						}
					]
				}
			}
		},
		methods: {
			init() {
				this.visible= true;
				this.$nextTick(()=>{
					this.$refs['dataForm'].resetFields();
				});
			},
			onSubmit() {
				this.$refs['dataForm'].validate((valid)=>{
					if(valid){
						console.log('提交数据');
						this.visible = false;
					}else{
						return false;
					}
				});
			}
		}
	}
</script>

<style>
</style>
