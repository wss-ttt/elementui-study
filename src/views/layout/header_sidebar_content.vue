<template>
	<div class="wrapper">
		<v-header></v-header>
		<v-sidebar></v-sidebar>
		<div class="content" :class="{'content-collapse':sidebarFold}">
			<div class="main-content">
				fafaf
			</div>
		</div>
	</div>
</template>

<script>
	import vHeader from './header.vue'
	import vSidebar from './sidebar'
	export default{
		name:'',
		data(){
			return{
			}
		},
		computed:{
			sidebarFold:{
				get(){
					return this.$store.state.common.sidebarFold;
				}
			}
		},
		components:{
			vHeader,
			vSidebar
		}
	}
</script>
<style lang="scss" scoped="scoped">
	.content{
		position: absolute;
		top:70px;
		left: 250px;
		bottom:0;
		right: 0;
		background-color: #f0f0f0;
		transition: left .3s ease-in-out;
		overflow: scroll;
		&.content-collapse{
			left: 64px;
		}
		.main-content{
			height: 100%;
			padding: 15px;
		}
	}
</style>