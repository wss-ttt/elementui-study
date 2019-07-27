<template>
	<div class="wrapper">
		<div class="sidebar">
			<el-menu background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" default-active="1-1">
				<el-submenu index="1">
					<template slot="title">
						<i class="el-icon-menu"></i>
						<span>首页</span>
					</template>
					<el-menu-item index="1-1"><i class="el-icon-menu"></i>首页一</el-menu-item>
					<el-menu-item index="1-2"><i class="el-icon-menu"></i>首页二</el-menu-item>
					<el-menu-item index="1-3"><i class="el-icon-menu"></i>首页三</el-menu-item>
				</el-submenu>
				<el-menu-item index="2">
					<i class="el-icon-document"></i>
					相册
				</el-menu-item>
				<el-menu-item index="3">
					<i class="el-icon-setting"></i>
					博客
				</el-menu-item>
				<el-menu-item index="4">
					<i class="el-icon-menu"></i>
					新闻
				</el-menu-item>
			</el-menu>
		</div>
	</div>
</template>
<script>
</script>
<style lang="scss" scoped="scoped">
	.sidebar {
		width: 250px;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		border: 1px solid #ddd;
	}
</style>
