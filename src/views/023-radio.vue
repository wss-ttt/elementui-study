<template>
	<div class="box">
		<el-radio-group v-model="type">
			<el-radio v-for="(item,index) in typeList"
			:label="item" 
			:key="index"></el-radio>
		</el-radio-group>
		<br>
		选择的是:{{type}}
		<hr>
		<el-radio label="语文" v-model="value"></el-radio>
		<el-radio label="数学" v-model="value"></el-radio>
		<br>
		选择的是:{{value}}
	</div>
</template>
<script>
	export default{
		name:'',
		data(){
			return{
				value:'',
				type:'',
				typeList:['数学','语文','英语']
			}
		},
		methods:{
		}
	}
</script>

<style>
</style>
