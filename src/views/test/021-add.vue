<template>
	<div class="box">
		<el-button @click="add">新增</el-button>
		<addUI v-if="addUI" ref="addUI"></addUI>
	</div>
</template>

<script>
	import addUI from '@/components/addUI.vue'
	export default {
		name: '',
		data() {
			return {
				addUI: false,
			}
		},
		methods: {
			add() {
				this.addUI = true;
				/* this.$nextTick(() => {
					this.$refs['addUI'].init();
				}); */
				this.$refs['addUI'].init();

			}
		},
		components: {
			addUI
		}
	}
</script>

<style>
</style>
