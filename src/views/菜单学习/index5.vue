<template>
	<div class="wrapper">
		<div class="sidebar">
			<el-menu background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" default-active="home" :collapse="isCollapse">
				<el-menu-item>
					<!--展开-->
					<i class="el-icon-s-unfold" v-if="isCollapse" @click="isCollapse=false"></i>
					<!--折叠-->
					<i class="el-icon-s-fold" v-else @click="isCollapse=true"></i>
				</el-menu-item>
				<template v-for="(item,index) in items">
					<!-- 有子项的 -->
					<template v-if="item.subs">
						<el-submenu :index="item.index" :key="item.index">
							<template slot="title">
								<i :class="item.icon"></i>
								<span>{{item.title}}</span>
							</template>
							<el-menu-item v-for="(subItem,subIndex) in item.subs" :index="subItem.index" :key="subItem.index">
								<i :class="subItem.icon"></i> 
								<span>{{subItem.title}}</span>
							</el-menu-item>
						</el-submenu>
					</template>
					<!-- 没有子项的 -->
					<template v-else>
						<el-menu-item :index="item.index" :key="item.index">
							<i :class="item.icon"></i> 
							<span>{{item.title}}</span>
						</el-menu-item>
					</template>
				</template>
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
				items: [{
						icon: 'el-icon-menu',
						index: 'home',
						title: '首页',
						subs: [{
								icon: 'el-icon-menu',
								index: 'home-1',
								title: '首页一'
							},
							{
								icon: 'el-icon-menu',
								index: 'home-2',
								title: '首页二'
							},
							{
								icon: 'el-icon-menu',
								index: 'home-3',
								title: '首页三'
							},
						]
					},
					{
						icon: 'el-icon-document',
						index: 'photo',
						title: '相册'
					},
					{
						icon: 'el-icon-setting',
						index: 'blog',
						title: '博客'
					},
					{
						icon: 'el-icon-location',
						index: 'news',
						title: '新闻'
					},
				]
			}
		},
	}
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