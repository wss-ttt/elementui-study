<template>
	<header>
		<el-button @click="send">发送数据</el-button>
	</header>
</template>

<script>
	import bus from './bus'
	export default{
		name:'',
		data(){
			return{
				
			}
		},
		methods:{
			send(){
				console.log('我要开始发送数据了。。。');
				bus.$emit('msg','好好学习');
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	header{
		height: 70px;
		background-color: #333;
	}
</style>