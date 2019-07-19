<template>
	<div class="box">
		<el-form :model="dataForm" ref="dataForm">
			<el-radio-group v-model="dataForm.type" disabled>
				<el-radio v-for="(item,index) in dataForm.typeList" :label="index" :index="index">{{item}}</el-radio>
			</el-radio-group>
			<el-form-item v-if="dataForm.type === 0">
				<el-input v-model="dataForm.name" placeholder="姓名"></el-input>
			</el-form-item>
			<el-form-item v-if="dataForm.type === 0">
				<el-input v-model="dataForm.age" placeholder="年龄"></el-input>
			</el-form-item>
			<el-form-item v-if="dataForm.type === 1">
				<el-input v-model="dataForm.city" placeholder="城市"></el-input>
			</el-form-item>
			<el-form-item v-if="dataForm.type === 1">
				<el-input v-model="dataForm.hobby" placeholder="爱好"></el-input>
			</el-form-item>
			<el-form-item>
				<el-input v-model="dataForm.common" placeholder="评论"></el-input>
			</el-form-item>
		</el-form>
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				dataForm:{
					type:0,
					typeList:['字典','子项'],
					name:'',
					age:'',
					city:'',   // 城市
					hobby:''    ,// 爱好
					common:'',   // 都有的
				}
			}
		}
	}
</script>

<style scoped="scoped">
	.box{
		width: 400px;
	}
</style>
