<template>
	<div class="box">
		<el-radio-group v-model="type">
			<el-radio label="数学"></el-radio>
			<el-radio label="语文"></el-radio>
			<el-radio label="英语"></el-radio>
		</el-radio-group>
		<hr>
		选择的是:{{type}}
		<el-button @click="setMath">数学</el-button>
	</div>
</template>

<script>
	export default{
		name:'',
		data(){
			return{
				type:'',
			}
		},
		methods:{
			setMath(){
				// 回显
				this.type = '数学';
			}
		}
	}
</script>

<style>
</style>
