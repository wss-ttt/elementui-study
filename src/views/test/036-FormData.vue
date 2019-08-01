<template>
	<div class="wrapper">
		<input type="file" @change="change"/>
		<el-button @click="fd">FormData</el-button>
	</div>
</template>

<script>
	export default{
		name:'',
		data(){
			return{
				file:'',
			}
		},
		methods:{
			fd(){
			},
			change(e){
				let form = new FormData();
				form.append('file',e.target.files[0])
				console.log(form)
				console.log(form.get('file'));
				this.$ajax({
					url:'http://192.168.0.222:8084/electric/calculateimport/import',
					method:'post',
					data:{
						filePath:'',
						multipartFile:form,
						type:1
					}
				}).then(({data})=>{
					console.log(data);
				})
			}
		}
	}
</script>

<style>
</style>