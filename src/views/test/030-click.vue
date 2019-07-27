<template>
	<div class="box">
		<el-button @click="test(1,$event)">测试</el-button>
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
			test(id,e){
				console.log(id);
				console.log(e);
			}
		}
	}
</script>

<style>
</style>
