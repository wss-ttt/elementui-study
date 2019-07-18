<template>
	<div class="box">
		<el-card class="box-card" v-show="visible">
			<div slot="header">
				新增
				<el-button type="text" style="float: right;padding: 3px 0;" 
				@click="visible=false">
					删除
				</el-button>
			</div>
			<div v-for="(item,index) in 4">
				列表内容:{{item}}
				<!-- {{'列表内容'+item}} -->
			</div>
		</el-card>
		<hr>
		<!-- 阴影的显示 -->
		<el-row :gutter="12">
			<el-col :span="8">
				<el-card shadow="always">
					白色风车
				</el-card>
			</el-col>
			<el-col :span="8">
				<el-card shadow="hover">
					七里香
				</el-card>
			</el-col>
			<el-col :span="8">
				<el-card shadow="never">
					黑色毛衣
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				visible:true
			}
		},
		methods:{
		}
	}
</script>

<style scoped="scoped">
	.box{
		width: 400px;
		margin: auto;
	}
</style>
