<template>
	<div class="box">
		切换:
		<el-radio-group v-model="type">
			<el-radio v-for="(item,index) in typeList" :label="index" :index="index">{{item}}</el-radio>
		</el-radio-group>
		<el-form :model="dataForm1" v-if="type===0" ref="dataForm1" :rules="rules">
			<el-form-item label="姓名" prop="name">
				<el-input v-model="dataForm1.name" placeholder="姓名"></el-input>
			</el-form-item>
			<el-form-item label="姓名" prop="age">
				<el-input v-model="dataForm1.age" placeholder="姓名"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button @click="onSubmit('0')">提交</el-button>
				<el-button @click="reset">重置</el-button>
			</el-form-item>
		</el-form>
		<el-form :model="dataForm2" v-if="type===1">
			<el-form-item label="姓名">
				<el-input v-model="dataForm2.city" placeholder="城市"></el-input>
			</el-form-item>
			<el-form-item label="姓名">
				<el-input v-model="dataForm2.addresss" placeholder="详细地址"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button @click="onSubmit('1')">提交</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				type:0,
				typeList:['字典','子项'],
				// 第一个表单
				dataForm1:{
					name:'',
					age:''
				},
				dataForm2:{
					city:'',
					addresss:''
				},
				rules:{
					name:[
						 { required: true, message: '请输入姓名', trigger: 'blur' },
					],
					age:[
						{ required: true, message: '请输入年龄', trigger: 'blur' },
					]
				}
			}
		},
		methods:{
			onSubmit(type){
				this.$refs['dataForm1'].validate((valid)=>{
					if(valid){
						console.log(valid);
						console.log(this.dataForm1);
					}else{
						console.log(valid);
					}
				});
			},
			reset(){
				this.$refs['dataForm1'].resetFields();
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
