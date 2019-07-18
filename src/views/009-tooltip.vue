<template>
	<div class="box">
		<!-- 第一种使用方法 -->
		<el-tooltip effect="light" :content="content" placement="top-end">
			<el-button>上左</el-button>
		</el-tooltip>
		<!-- 第二种使用方法 -->
		<el-tooltip  placement="top-end">
			<div class="main" slot="content">
				<ul>
					<li>给我一首歌的时间</li>
					<li>黑色毛衣</li>
				</ul>
			</div>
			<el-button>我是提示信息</el-button>
		</el-tooltip>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				content:'给我一首歌的时间'
			}
		}
	}
</script>

<style>
</style>
