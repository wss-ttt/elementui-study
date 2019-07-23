<template>
	<el-dialog title="新增|修改" :visible.sync="visible">
		<el-form :model="dataForm" label-width="100px" ref="dataForm">
			<el-form-item label="姓名">
				<el-input placeholder="姓名" v-model="dataForm.name"></el-input>
			</el-form-item>
			<el-form-item label="性别">
				<el-input placeholder="姓名" v-model="dataForm.name"></el-input>
			</el-form-item>
			<el-form-item label="年龄">
				<el-input placeholder="年龄" v-model="dataForm.age"></el-input>
			</el-form-item>
			<el-form-item label="专业">
				<el-input placeholder="专业" v-model="dataForm.major"></el-input>
			</el-form-item>
		</el-form>
	</el-dialog>
</template>

<script>
	export default{
		name:'addOrUpdate',
		data(){
			return{
				visible:false,
				dataForm:{
					id:'',   // 身份证号(住建)
					name:'',  // 姓名
					sex:'',  // 性别
					age:0,  // 年龄
					major:'',  // 专业
				}
			}
		},
		methods:{
			init(id){
				console.log(id);
				this.visible = true;
				this.$nextTick(()=>{
					// 重置表单
					this.$refs['dataForm'].resetFields();
				});
			}
		}
	}
</script>

<style>
</style>
