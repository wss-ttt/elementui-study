<template>
	<div class="wrapper">
		<div class="sidebar">
			<el-menu class="sidebar-el-menu" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" default-active="2" :collapse="isCollapse">
				<el-menu-item>
					<!--展开-->
					<i class="el-icon-s-unfold" v-if="isCollapse" @click="isCollapse=false"></i>
					<!--折叠-->
					<i class="el-icon-s-fold" v-else @click="isCollapse=true"></i>
				</el-menu-item>
				<el-menu-item index="1"><i class="el-icon-menu"></i>
					<span>首页</span>
				</el-menu-item>
				<el-menu-item index="2"><i class="el-icon-document"></i>
					<span>相册</span>
				</el-menu-item>
				<el-menu-item index="3"><i class="el-icon-setting"></i>
					<span>博客</span>
				</el-menu-item>
				<el-menu-item index="4"><i class="el-icon-location"></i>
					<span>新闻</span>
				</el-menu-item>
			</el-menu>
		</div>
	</div>
</template>
<script>
	export default {
		name: '',
		data() {
			return {
				isCollapse: true, // 是否折叠菜单
			}
		}
	}
</script>
<style lang="scss" scoped="scoped">
	.sidebar {
		/*width: 250px;*/
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		border: 1px solid #ddd;
	}
	
	.sidebar-el-menu:not(.el-menu--collapse) {
		width: 250px;
	}
</style>