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
			// 第一种写法
			var that = this;
			bus.$on('msg',function(data){
				// 获取数据
				that.msg = data;
			});
			
			// 第二种写法  使用箭头函数
			/*bus.$on('msg',data=>{
				// 获取数据
				this.msg = data;
			});*/
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