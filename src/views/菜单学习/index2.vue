<template>
	<div class="wrapper">
		<div class="sidebar">
			<el-menu 
			background-color="#545c64" 
			text-color="#fff" 
			active-text-color="#ffd04b"
			default-active="2">
				<el-menu-item index="1"><i class="el-icon-menu"></i>首页</el-menu-item>
				<el-menu-item index="2"><i class="el-icon-document"></i>相册</el-menu-item>
				<el-menu-item index="3"><i class="el-icon-setting"></i>博客</el-menu-item>
				<el-menu-item index="4"><i class="el-icon-location"></i>新闻</el-menu-item>
			</el-menu>
		</div>
	</div>
</template>
<script>
</script>
<style lang="scss" scoped="scoped">
	.sidebar{
		width: 250px;
		position: absolute;
		top:0;
		left: 0;
		bottom: 0;
		border: 1px solid #ddd;
	}
</style>
