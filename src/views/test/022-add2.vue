<template>
	<div class="box">
		<el-button @click="add">新增</el-button>
		<addForm v-if="addForm" ref="addForm"></addForm>
	</div>
</template>

<script>
	import addForm from '@/components/addForm.vue'
	export default{
		name:'',
		data(){
			return{
				addForm:false,  // 控制弹框的显示和隐藏
			}
		},
		methods:{
			add(){
				this.addForm = true;
				this.$nextTick(()=>{
					this.$refs['addForm'].init();
				});
			}
		},
		components:{
			addForm
		}
	}
</script>

<style>
</style>
