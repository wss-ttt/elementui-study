<template>
	<div class="wrapper">
		<v-header></v-header>
		<v-sidebar></v-sidebar>
		<div class="content">
			<div class="main-content">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
	import vHeader from './header'
	import vSidebar from './sidebar'
	export default{
		name:'',
		data(){
			return{
				
			}
		},
		components:{
			vHeader,
			vSidebar
		},
		watch:{
			$route:'routeHandle'
		},
		methods:{
			routeHandle(route){
				console.log('监听路由的变化');
				console.log(route);
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.wrapper{
		height: 100%;
		.content{
			position: absolute;
			top:70px;
			left: 250px;
			bottom:0;
			right: 0;
			// height: 100%:     // 此处不能用height:100%; 而应该用bottom:0;
			background-color: #1acd7e;
			padding: 15px;
			overflow: scroll;
			.main-content{
				height: 1000px;
				background-color: #fff;
			}
		}
	}
</style>
