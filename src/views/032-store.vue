<template>
	<div class="box">
		姓名：{{name}}
		<hr>
		<div class="test"></div>
	</div>
</template>

<script>
	export default{
		name:'',
		data(){
			return{
				name:'',
			}
		},
		created(){
			this.name = this.$store.state.user.name;
		}
	}
</script>

<style scoped="scoped" lang="scss">
</style>
