<template>
	<div class="echartsMain2">
		<ul>
			<li v-for="(item,index) in tabs" :key="index" @click="tab(item)">{{item}}</li>
		</ul>
		<hr />
		<div class="contents">
			<div class="line" id="mainLine" v-if="isShow === '直线'">

			</div>
			<div class="bar" id="mainBar" v-if="isShow === '柱状图'">

			</div>
		</div>
	</div>
</template>

<script>
	import echarts from 'echarts'
	export default {
		name: '',
		data() {
			return {
				tabs: ['直线', '柱状图'],
				lineChart: null,
				barChart: null,
				isShow:'直线'
			}
		},
		methods: {
			tab(tab){
				console.log(tab);
				this.isShow = tab;
				if(tab === '直线'){
					this.$nextTick(()=>{
						this.initLine();
					})
				}
				if(tab === '柱状图'){
					this.$nextTick(()=>{
						this.initBar();
					})
				}
			},
			initLine() {
				this.lineChart = echarts.init(document.getElementById('mainLine'));

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

				this.lineChart.setOption(option);
				window.addEventListener('resize', () => {
					this.lineChart.resize()
				})
			},
			initBar() {
				this.barChart = echarts.init(document.getElementById('mainBar'));

				var option = {
					xAxis: {
						type: 'category',
						data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
					},
					yAxis: {
						type: 'value'
					},
					series: [{
						data: [120, 200, 150, 80, 70, 110, 130],
						type: 'bar'
					}]
				};

				this.barChart.setOption(option);
				window.addEventListener('resize', () => {
					this.barChart.resize()
				})
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.line,.bar{
		width: 500px;
		height: 500px;
		border: 1px solid #ddd;
	}
</style>