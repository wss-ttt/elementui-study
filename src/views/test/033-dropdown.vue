<template>
	<div class="test">
		<el-dropdown trigger="click" @command="handleCommand">
			<span>
                {{username}} 
            <i class="el-icon-caret-bottom"></i>
            </span>
			<el-dropdown-menu slot="dropdown">
				<a href="#" target="_blank">
					<el-dropdown-item>个人中心</el-dropdown-item>
				</a>
				<a href="#" target="_blank">
					<el-dropdown-item>仓库地址</el-dropdown-item>
				</a>
				<el-dropdown-item divided>退出登录</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
		
		<hr />
		<el-dropdown trigger="click" @command="handleCommand" size="small">
			<span class="el-dropdown-link">
            	{{username}} 
            	<i class="el-icon-caret-bottom"></i>
            </span>
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item command="个人中心">个人中心</el-dropdown-item>
				<el-dropdown-item command="仓库地址">仓库地址</el-dropdown-item>
				<el-dropdown-item divided command="退出登录">退出登录</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
	</div>
</template>
<script>
	export default {
		name: '',
		data() {
			return {
				username: 'admin'
			}
		},
		methods:{
			handleCommand(command){
				this.$message('click on item ' + command);
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.el-dropdown-link{
        cursor: pointer;
    }
</style>