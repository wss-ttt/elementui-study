<template>
	<div class="mask">
		<h1>我是遮罩层</h1>
		<button @click="closeMask">关闭</button>
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
			closeMask(){
				this.$emit('closeMask');
			}
		}
	}
</script>
<style scoped="scoped">
	.mask{
		position: absolute;
		top:0;
		left: 0;
		bottom: 0;
		right: 0;
		background-color: #000;
	}
	h1{
		color:#fff;
	}
</style>