<template>
	<div class="box">
		<h2>复选框组</h2>
		<el-checkbox-group v-model="value">
			<el-checkbox v-for="(item,index) in typeList" 
			:label="item" 
			:key="index"></el-checkbox>
		</el-checkbox-group>
		<br>
		你选择的是:{{value}}
		<hr>
		<el-checkbox v-model="checked">选项一</el-checkbox>
		<br>
		你选择的是:{{checked}}
	</div>
</template>

<script>
	export default{
		name:'',
		data(){
			return{
				checked:false,
				value:[],
				typeList:['复选框 A','复选框 B','复选框 C'],
			}
		}
	}
</script>

<style>
</style>
