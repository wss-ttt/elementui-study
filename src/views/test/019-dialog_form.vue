<template>
	<div class="box">
		<el-button @click="add">新增</el-button>
		<el-dialog title="新增" :visible.sync="dialogVisible">
			<el-form :model="dataForm" ref="dataForm" :rules="rules">
				<el-form-item label="姓名" prop="name">
					<el-input v-model="dataForm.name" placeholder="姓名"></el-input>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="onSubmit">确 定</el-button>
			</span>
		</el-dialog>
	</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				dialogVisible: false,
				dataForm:{
					name:'',   // 姓名
				},
				rules:{
					name:[
						{required:true,message:'请输入用户名',trigger:'blur'}
					]
				}
			}
		},
		methods: {
			add() {
				this.dialogVisible = true;
				this.$nextTick(()=>{
					this.$refs['dataForm'].resetFields();
				});
			},
			onSubmit(){
				console.log('提交成功');
				this.dialogVisible = false;
			}
		}
	}
</script>

<style>
</style>
