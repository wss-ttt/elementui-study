<template>
	<div class="wrapper">
		<el-button @click="change">显示/隐藏</el-button>
		<el-button @click="getBox">获取v-box元素</el-button>
		<hr />
		<v-box ref="box" v-show="visible"></v-box>
	</div>
</template>

<script>
	import vBox from '@/components/box.vue'
	export default{
		name:'',
		data(){
			return{
				visible:false
			}
		},
		methods:{
			change(){
				this.visible = true;
				console.log('我在this.visible的下面');
			},
			getBox(){
				console.log(this.$refs['box']);
			}
		},
		components:{
			vBox
		}
	}
</script>

<style>
</style>