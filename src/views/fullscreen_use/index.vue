<template>
	<div class="wrapper">
		<el-tooltip effect="dark" placement="bottom" :content="fullscreen?'取消全屏':'全屏'">
			<i class="el-icon-rank v-icon" @click="handleFullscreen"></i>
		</el-tooltip>
	</div>
</template>

<script>
	import screenfull from 'screenfull'
	export default {
		name: '',
		data() {
			return {
				fullscreen: false,
			}
		},
		methods: {
			handleFullscreen() {
				if(!screenfull.enabled) {
					this.$message({
						message: '不支持全屏',
						type: 'warning'
					})
					return false
				}
				screenfull.toggle();
				this.fullscreen = !this.fullscreen;
				this.$message({
					type:'success',
					message:'全屏'
				});
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.v-icon {
		font-size: 30px;
	}
</style>