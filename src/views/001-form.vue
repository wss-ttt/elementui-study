<template>
	<div class="test">
		<div class="box">
			登录页面
			<el-form :model="formData">
				<el-form-item label="姓名">
					<el-input 
						type="text" 
						v-model="formData.userName" 
						placeholder="姓名">
					</el-input>
				</el-form-item>
				<el-form-item label="密码">
					<el-input 
						type="text" 
						v-model="formData.pwd" 
						placeholder="姓名">
					</el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="onSubmit">提交</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				formData:{
					userName:'',  // 用户名
					pwd:'',   // 密码
				}
			}
		},
		methods: {
			onSubmit(){
				console.log('姓名:',this.formData.userName);
				console.log('密码:',this.formData.pwd);
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.box{
		width: 400px;
		border: 1px solid #ddd;
		margin: 100px auto;
	}
</style>