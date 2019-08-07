<template>
	<div id="main"></div>
</template>

<script>
	import echarts from 'echarts'
	export default {
		name: '',
		data() {
			return {
				myChart: null
			}
		},
		mounted() {
			this.initCharts();
		},
		methods: {
			initCharts() {
				this.myChart = echarts.init(document.getElementById('main'));

				var option = {
					xAxis: {
						type: 'category',
						data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
					},
					yAxis: {
						type: 'value'
					},
					series: [{
						data: [820, 932, 901, 934, 1290, 1330, 1320],
						type: 'line'
					}]
				};

				this.myChart.setOption(option);
				window.addEventListener('resize', () => {
					this.myChart.resize()
				})
			}
		}
	}
</script>

<style scoped="scoped">
	#main {
		width: 100%;
		height: 100%;
	}
</style>