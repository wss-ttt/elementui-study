<template>
	<div class="wrapper">
		<header>
			后台管理系统
		</header>
		<el-menu style="width: 250px" :collapse="isCollapse" 
			:collapse-transition="false" 
			background-color="#333" 
			text-color="#fff">
			<z-menu :menus="menus"></z-menu>
		</el-menu>
	</div>
</template>

<script>
	import menuList from '@/assets/data/menuList.json'
	import zMenu from './components/zMenu.vue'
	export default{
		name:'',
		data(){
			return{
				isCollapse:true,
				menus:menuList,
			}
		},
		mounted(){
			console.log(this.menus);
		},
		components:{
			zMenu
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.wrapper{
		
	}
	header{
		height: 70px;
		background-color: #ccc;
	}
</style>