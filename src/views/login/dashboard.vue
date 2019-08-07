<template>
	<div class="wrapper">
		<a href = "javascript:history.go(-1);">取消</a>
		<user-bar></user-bar>
	</div>
</template>

<script>
	import userBar from './components/userBar.vue'
	export default{
		name:'',
		data(){
			return{
				
			}
		},
		components:{
			userBar
		}
	}
</script>

<style>
</style>