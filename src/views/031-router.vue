<template>
	<div class="box">
		<el-button @click="go">跳转页面</el-button>
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
			go(){
				// this.$router.push({path:'/028-ajax'});
				this.$router.push({name:'028-ajax'});
			}
		}
	}
</script>

<style>
</style>
