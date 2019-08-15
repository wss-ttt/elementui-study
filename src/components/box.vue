<template>
	<div class="box">
		我是一个盒子
	</div>
</template>

<script>
	export default{
		name:'',
		data(){
			return{
				
			}
		},
		created(){
			console.log('created');
		},
		mounted(){
			console.log('mounted');
		},
		methods:{
			
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.box{
		width: 400px;
		height: 400px;
		border: 1px solid red;
	}
</style>