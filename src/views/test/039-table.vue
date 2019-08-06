<template>
	<div class="wrapper">
		<el-button @click="getData">获取数据(get)</el-button>
		<el-button @click="getData2">获取数据(post)</el-button>
		<el-button @click="getData3">获取数据2</el-button>
		<el-table :data="dataTable">
			<el-table-column prop="id" label="编号"></el-table-column>
			<el-table-column prop="name" label="姓名"></el-table-column>
			<el-table-column prop="sex" label="性别"></el-table-column>
			<el-table-column prop="age" label="年龄"></el-table-column>
		</el-table>
	</div>
</template>

<script>
	import request from '@/utils/request'   // 导入axios对象
	export default{
		name:'',
		data(){
			return{
				baseUrl:'https://www.easy-mock.com/mock/5d22e06ce6f04f21fc5b6be7',
				dataTable:[]
			}
		},
		mounted(){
		},
		methods:{
			getData(){
				request({
					url:'/user/list',
					method:'get',
					params:{
						id:1,
						name:'乔峰'
					}
				}).then((data)=>{
					console.log('getData');
					console.log(data);
				})
			},
			getData2(){
				request({
					url:'/user/list21',
					method:'post',
					data:{
						id:2,
						name:'小龙女'
					}
				}).then((data)=>{
					console.log('getData');
					console.log(data);
				}).catch((error)=>{
					console.log('请求错误',error);
				})
			},
			getData3(){
				this.$ajax({
					url:this.baseUrl+'/user/list',
					method:'get'
				}).then((data)=>{
					console.log('getData2');
					console.log(data);
				});
			}
		}
	}
</script>

<style>
</style>