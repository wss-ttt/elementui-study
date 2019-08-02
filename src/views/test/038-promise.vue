<template>
	<div class="wrapper">
		<el-button @click="promise">promise</el-button>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			promise() {
				/*var p = new Promise(function(resolve, reject) {
					var flag = false;
					if(flag) {
						resolve('这是数据2');
					} else {
						reject('这是数据2');
					}
				});
				
				p.then(function(data) {
					
					console.log(data);
					console.log('这是成功操作');
					
				}).catch(function(err) {
					
					console.log(err);
					console.log('这是失败的操作');
					
				});*/
				
				this.test().then((data)=>{
					console.log(data);
				}).catch((err)=>{
					console.log(err);
				});
			},
			test(){
				return new Promise((resolve,reject)=>{
					var flag = false;
					if(flag) {
						resolve('这是数据2');
					} else {
						reject('这是数据2');
					}
				});
			}
		}
	}
</script>

<style>

</style>