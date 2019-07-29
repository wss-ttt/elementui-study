<template>
	<div class="header">
		<!-- 折叠按钮 -->
		<div class="collapse-btn" @click="sidebarFold = !sidebarFold">
		    <i class="el-icon-menu"></i>
		</div>
		<!-- logo -->
		<div class="logo">后台管理系统</div>
	</div>
</template>

<script>
	export default{
		name:'',
		data(){
			return{
				
			}
		},
		methods:{
		},
		computed:{
			sidebarFold:{
				get(){
					return this.$store.state.common.sidebarFold;
				},
				set(val){
					console.log('我执行了没');
					this.$store.commit('common/updateSidebarFold',val);
				}
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.header{
		width: 100%;
		height: 70px;
		background-color: #242f42;
		font-size:22px;
		color:#fff;
	}
	.collapse-btn{
		float: left;
		line-height: 70px;
		padding: 0 21px;
		cursor: pointer;
	}
	.logo{
		width: 250px;
		float: left;
		line-height: 70px;
	}
</style>
