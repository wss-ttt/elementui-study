<template>
	<el-dialog title="新增" :visible.sync="visible">
		我是新增的界面
		<span slot="footer" class="dialog-footer">
			<el-button @click="visible = false">取 消</el-button>
			<el-button type="primary" @click="onSubmit">确 定</el-button>
		</span>
	</el-dialog>
</template>
<script>
	export default{
		name:'addUI',
		data(){
			return{
				visible:false,
			}
		},
		methods:{
			init(){
				console.log('执行了没');
				this.visible = true;
			},
			onSubmit(){
				console.log('提交');
				this.visible = false;
			}
		}
	}
</script>
<style>
</style>
