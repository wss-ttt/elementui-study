<template>
	<div class="menu">
		<SideBar :menuList = "menuList"></SideBar>
	</div>
</template>

<script>
	import menuList from '@/assets/data/menuList.json'
	import SideBar from './components/SideBar'
	export default{
		name:'',
		data(){
			return{
				menuList
			}
		},
		components:{
			SideBar
		}
	}
</script>

<style>
</style>