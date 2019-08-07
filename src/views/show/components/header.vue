<template>
	<div class="header">
		<button @click="showMask">显示</button>
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
			showMask(){
				this.$emit('showMask');
			}
		}
	}
</script>
<style scoped="scoped">
	header{
		height: 100px;
		background-color: #42B983;
	}
</style>