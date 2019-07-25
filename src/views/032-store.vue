<template>
	<div class="box">
		姓名：{{name}}
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

<style>
</style>
