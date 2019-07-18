<template>
	<div class="box">
		<el-form :model="updataPwdForm" :rules="rules" ref="updataPwdForm" label-width="100px">
			<el-form-item label="密码" prop="pass">
				<el-input v-model="updataPwdForm.pass" placeholder="密码"></el-input>
			</el-form-item>
			<el-form-item label="确认密码" prop="checkPass">
				<el-input v-model="updataPwdForm.checkPass" placeholder="确认密码"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onSubmit('updataPwdForm')">完成</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default {
		data() {
			var validatePass = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入密码'));
				} else {
					if (this.updataPwdForm.checkPass !== '') {
						this.$refs.updataPwdForm.validateField('checkPass');
					}
					callback();
				}
			};
			var validatePass2 = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请再次输入密码'));
				} else if (value !== this.updataPwdForm.pass) {
					callback(new Error('两次输入密码不一致!'));
				} else {
					callback();
				}
			};
			return {
				updataPwdForm: {
					pass: '', // 密码
					checkPass: '', // 确认密码
				},
				rules: {
					pass: [{
						validator: validatePass,
						trigger: 'blur'
					}],
					checkPass: [{
						validator: validatePass2,
						trigger: 'blur'
					}],
				},
			}
		},
		methods: {
			onSubmit(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						alert('submit!');
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			}
		}
	}
</script>

<style>
</style>
