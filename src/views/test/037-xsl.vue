<template>
	<div class="wrapper">
		<el-upload 
			action="#" ref="fileupload" 
			:show-file-list="false" 
			:http-request="upLoadChange" 
			>
			<el-button type="primary">
				上传文件
			</el-button>
		</el-upload>
		<!--:before-upload="beforeUpload"-->
	</div>
</template>

<script>
	import XLSX  from 'xlsx'
	export default{
		name:'',
		data(){
			return{
				
			}
		},
		methods:{
			upLoadChange(item){
				var wb;
				var file = item.file;
				var outdata;
				console.log(file);
				var reader = new FileReader();
				reader.readAsBinaryString(file);
				reader.onload = function(e){
					console.log('aaa');
					var data = e.target.result;
					wb = XLSX.read(data,{
						type:'binary'
					});
					console.log('data',data);
					console.log('wb',wb);
					console.log(wb.Sheets[wb.SheetNames[0]]);
					outdata = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
					console.log('outdata:',outdata);
				}
			}
		}
	}
</script>

<style>

</style>