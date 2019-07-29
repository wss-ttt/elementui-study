<template>
	<div class="sidebar">
		{{msg}}
	</div>
</template>

<script>
	import bus from './bus'
	export default{
		name:'',
		data(){
			return{
				msg:'',
			}
		},
		created(){
			console.log('我是啥时候执行了');
			bus.$on('msg',data=>{
				console.log('我到这了吗');
				console.log(data);
				// 获取数据
				this.msg = data;
			});
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.sidebar{
		position: absolute;
		width: 250px;
		top:70px;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #42B983;
	}
</style>