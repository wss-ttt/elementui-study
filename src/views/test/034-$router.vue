<template>
	<div class="wrapper">
		测试$router对象
	</div>
</template>

<script>
	export default {
		name:'',
		data(){
			return{
				
			}
		},
		mounted(){
			console.log(this.$router);
			console.log(this.$router.options);
			console.log(this.$router.options.routes);
		}
	}
</script>

<style>
</style>