<template>
	<div class="box">
		<el-radio label="wuhan" v-model="name">武汉</el-radio>
		<el-radio label="shanghai" v-model="name">上海</el-radio>
		<div v-if="name === 'wuhan'">我是武汉</div>
		<div v-if="name === 'shanghai'">我是上海</div>
	</div>
</template>

<script>
	export default {
		name: '',
		data() {
			return {
				name:'wuhan',   // 默认武汉被选中
			}
		},
	}
</script>

<style lang="scss" scoped="scoped">
	.box {
		width: 400px;
		height: 400px;
		border: 1px solid #ddd;
		margin: auto;
		padding: 15px;
	}
</style>
