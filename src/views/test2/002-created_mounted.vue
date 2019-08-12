<template>
	<div class="wrapper">
		<el-button @click="changeStr">改变</el-button>
		<div ref="show">
			{{msg}}
		</div>
	</div>
</template>
<script>
	export default{
		name:'',
		data(){
			return{
				msg:'好好学习 天天向上',
			}
		},
		created(){
			this.$nextTick(()=>{
				console.log('created')
			})
		},
		mounted(){
			console.log('mounted');
		},
		methods:{
			changeStr(){
				this.msg="能不能给我一首歌的时间";
				
				// 此时的数据结果是 "好好学习 天天向上"
				console.log(this.$refs['show'].innerText);
				
				// 此时的数据结果是 "能不能给我一首歌的时间"
				this.$nextTick(()=>{
					console.log(this.$refs['show'].innerText)
				})
			}
		}
	}
</script>

<style>
</style>