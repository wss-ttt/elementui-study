<template>
	<div class="wrapper">
		<el-tooltip effect="dark" placement="bottom" :content="fullscreen?'取消全屏':'全屏'">
			<i class="el-icon-rank v-icon"></i>
		</el-tooltip>
	</div>
</template>

<script>
	export default{
		name:'',
		data(){
			return{
				fullscreen:false,
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.v-icon{
		font-size:30px;
	}
</style>