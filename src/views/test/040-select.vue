<template>
	<div class="test">
		<el-select v-model="selVal"
		 @change="change">
			<el-option v-for="(item,index) in assessment"
			 :key="index"
			 :label="item"
			 :value="item">
			</el-option>
		</el-select>
	</div>
</template>

<script>
	export default{
		name:'',
		data(){
			return{
				selVal:'',
				assessment : ['2018/01/29-2018/02/29', '2018/01/29-2018/02/30', '2018/01/29-2018/02/31']
			}
		},
		methods:{
			change(val){
				console.log(this.selVal);
				console.log(val);
			}
		}
	}
</script>

<style>

</style>