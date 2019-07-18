<template>
	<div class="box">
		<el-popover 
		placement="top-start" 
		title="标题" 
		width="200" 
		trigger="hover" 
		content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
		<el-input type="text" slot="reference" placeholder="请选择"></el-input>
		<el-button slot="reference">确定</el-button>
		</el-popover>
		<hr>
		<el-popover title="歌曲" ref="pop" width="300px" trigger="hover" placement="right">
			<div class="content">
				<ul>
					<li>七里香</li>
					<li>黑色毛衣</li>
					<li>给我一首歌的时间</li>
				</ul>
			</div>
		</el-popover>
		<el-button v-popover:pop>弹出popover</el-button>
	</div>
</template>
<script>
</script>
<style lang="scss" scoped="scoped">
	.box{
		width: 400px;
	}
</style>
