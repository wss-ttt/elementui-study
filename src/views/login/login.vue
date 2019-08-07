<template>
	<div class="login">
		<el-form :model="dataForm">
			<el-form-item>
				<el-input v-model="dataForm.userName"
				 placeholder="用户名"></el-input>
			</el-form-item>
			<el-form-item>
				<el-input v-model="dataForm.pwd"
				 placeholder="密码"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary"
				 @click="login">登录</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	const users = [{
			userName: '乔峰',
			pwd: '123'
		},
		{
			userName: '杨过',
			pwd: '123'
		},
		{
			userName: '小龙女',
			pwd: '123'
		},
	];
	export default {
		name: '',
		data() {
			return {
				dataForm: {
					userName: '',
					pwd:'',
				}
			}
		},
		methods: {
			login() {
				var isLogin = false;
				for(let i = 0; i < users.length; i++) {
					if(this.dataForm.userName === users[i].userName && this.dataForm.pwd === users[i].pwd) {
						this.$router.replace('dashboard');
						// 保存用户名
						localStorage.setItem('userName',this.dataForm.userName);
						isLogin = true;
						break;
					}
				}
				if(!isLogin) {
					this.$message.error('用户名或密码错误');
				}
			}
		}
	}
</script>

<style>

</style>