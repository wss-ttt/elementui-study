<template>
	<div class="box">
		<el-popover title="确定要删除当前数据吗" ref="pop" trigger="click" v-model="visible">
			<div>
				<div>好好学习 天天向上</div>
				<el-button type="primary" @click="visible=false">取消</el-button>
				<el-button type="danger" @click="visible=false">确定</el-button>
			</div>
		</el-popover>
		<el-button v-popover:pop>删除</el-button>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				visible:false
			}
		}
	}
</script>

<style scoped="scoped">
</style>
