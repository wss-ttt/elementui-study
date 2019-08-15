<template>
	<div class="wrapper">
		<el-button @click="send">发送请求</el-button>
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
			send(){
				this.$ajax({
					url:'http://news-at.zhihu.com/api/2/news/latest',
					method:'get'
				}).then((data)=>{
					console.log(data);
				})
			}
		}
	}
</script>

<style>
</style>