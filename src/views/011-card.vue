<template>
	<div class="box">
		<el-card :body-style="{padding:'0'}">
			<img src="../assets/1.jpg" />
			<div class="info">
				<div class="header">
					好好学习
				</div>
				<div class="content">
					给我一首歌的时间给我一首歌的时间给我一首歌的时间
				</div>
			</div>
		</el-card>
		<el-divider></el-divider>
	</div>
</template>
<script>
	export default{
		data(){
			return{
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
	img{
		width: 100%;
		display: block;
	}
	.info{
		padding: 15px;
	}
</style>
