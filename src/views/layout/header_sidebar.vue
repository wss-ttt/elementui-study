<template>
	<div class="wrapper">
		<v-header></v-header>
		<v-sidebar></v-sidebar>
	</div>
</template>

<script>
	import vHeader from './header.vue'
	import vSidebar from './sidebar'
	export default{
		name:'',
		data(){
			return{
				
			}
		},
		components:{
			vHeader,
			vSidebar
		}
	}
</script>
<style>
</style>