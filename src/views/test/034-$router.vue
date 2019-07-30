<template>
	<div class="wrapper">
		{{msg.name}}
		<a :href="$route.path">跳转</a>
	</div>
</template>

<script>
	export default {
		name:'',
		data(){
			return{
				msg:this.$route
			}
		},
		mounted(){
			/*console.log(this.$router);
			console.log(this.$router.options);
			console.log(this.$router.options.routes);*/
			
			console.log(this.$route);
		}
	}
</script>

<style>
</style>