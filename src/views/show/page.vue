<template>
	<div class="page">
		<v-header @showMask="show"></v-header>
		<v-mask v-show="isVisible" @closeMask="close"></v-mask>
	</div>
</template>
<script>
	import vHeader from './components/header.vue'
	import vMask from './components/mask.vue'
	export default{
		name:'',
		data(){
			return{
				isVisible:false,  // 控制显示也隐藏
			}
		},
		components:{
			vHeader,
			vMask
		},
		methods:{
			show(){
				this.isVisible = true;  // 进行显示
			},
			close(){
				this.isVisible = false; // 进行隐藏
			}
		}
	}
</script>
<style>
</style>