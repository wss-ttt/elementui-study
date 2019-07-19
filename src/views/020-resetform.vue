<template>
	<div class="box">
		<el-form :model="dataForm" :rules="rules" ref="myForm">
			<el-form-item label="类型" prop="type">
				<el-radio-group v-model="dataForm.type">
					<el-radio label="一"></el-radio>
					<el-radio label="二"></el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="城市" prop="city" v-show="dataForm.type === '一'">
				<el-input v-model="dataForm.city" placeholder="城市"></el-input>
			</el-form-item>
			<el-form-item label="姓名" prop="name" v-show="dataForm.type === '二'">
				<el-input v-model="dataForm.name" placeholder="姓名"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button @click="resetForm('myForm')">重置</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default{
		name:'',
		data(){
			return{
				dataForm:{
					type:'一',
					city:'',
					name:'',
				},
				rules:{
					type:[
						 { required: true, message: '请选择类型', trigger: 'change' }
					],
					city:[
						{ required: true, message: '请输入所在城市', trigger: 'blur' }
					],
					name:[
						{ required: true, message: '请输入姓名', trigger: 'blur' }
					]
				}
			}
		},
		methods:{
			resetForm(formName){
				// 重置表单数据
				this.$refs[formName].resetFields();
			}
		}
	}
</script>

<style scoped="scoped">
	.box{
		width: 400px;
		margin: auto;
	}
</style>
