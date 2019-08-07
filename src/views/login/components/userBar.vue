<template>
	<div class="user">
		<div v-if="userName">
			{{userName}}
		</div>
		<div v-else>
			请先登录
		</div>
	</div>
</template>

<script>
	export default{
		name:'user',
		data(){
			return {
				userName:'aaa',
			}
		},
	}
</script>

<style>
</style>