<template>
	<div class="wrapper">
		<div class="sidebar">
			<el-menu class="sidebar-el-menu"
			background-color="#545c64" 
			text-color="#fff" 
			active-text-color="#ffd04b"
			default-active="home" 
			:collapse="isCollapse"
			router
			>
				<el-menu-item>
					<!--展开-->
					<i class="el-icon-s-unfold" v-if="isCollapse" @click="isCollapse=false"></i>
					<!--折叠-->
					<i class="el-icon-s-fold" v-else @click="isCollapse=true"></i>
				</el-menu-item>
				<el-menu-item v-for="(item,index) in items" :index="item.route" :key="item.index">
					<i :class="item.icon"></i>
					<span>{{item.title}}</span>
				</el-menu-item>
			</el-menu>
		</div>
	</div>
</template>
<script>
	export default{
		name:'',
		data(){
			return{
				isCollapse: true, // 是否折叠菜单
				items:[
					{
						icon:'el-icon-menu',
						index:'home',
						route:'menu',
						title:'首页'
					},
					{
						icon:'el-icon-document',
						index:'photo',
						route:'menu2',
						title:'相册'
					},
					{
						icon:'el-icon-setting',
						index:'blog',
						route:'menu3',
						title:'博客'
					},
					{
						icon:'el-icon-location',
						index:'news',
						route:'menu4',
						title:'新闻'
					},
				]
			}
		},
	}
</script>
<style lang="scss" scoped="scoped">
	.sidebar{
		/*width: 250px;*/
		position: absolute;
		top:0;
		left: 0;
		bottom: 0;
		border: 1px solid #ddd;
	}
	.sidebar-el-menu:not(.el-menu--collapse) {
		width: 250px;
	}
</style>
