<template>
	<div class="box">
		<el-radio-group v-model="type">
			<!-- <el-radio label="1">新闻</el-radio>
			<el-radio label="2">博客</el-radio>
			<el-radio label="3">相册</el-radio> -->
			<el-radio v-for="(item,index) in typeList" :label="index" :key="index">{{item}}</el-radio>
		</el-radio-group>
		<div class="news" v-if="type === 0">新闻内容</div>
		<div class="blog" v-if="type === 1">博客内容</div>
		<div class="photo" v-if="type === 2">相册内容</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				type: 0,
				typeList: ['新闻   ', '博客', '相册']
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.box {
		width: 400px;
		height: 400px;
		border: 1px solid #ddd;
		margin: auto;
		padding: 15px;

		>div {
			margin-top: 30px;
		}
	}
</style>
