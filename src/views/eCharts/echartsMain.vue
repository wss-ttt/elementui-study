<template>
	<div class="echarts">
		<ul>
			<li v-for="(item,index) in tabs" @click="tab(item.name)">
				{{item.title}}
			</li>
		</ul>
		<hr />
		<div class="show">
			<component :is="currentCom"></component>
		</div>
	</div>
</template>

<script>
	import vline from './components/line.vue'
	import vbar from './components/bar.vue'
	export default{
		name:'',
		data(){
			return{
				currentCom:'line',
				tabs:[
					{
						title:'直线图',
						name:'vline'
					},
					{
						title:'柱状图',
						name:'vbar'
					}
				]
			}
		},
		methods:{
			tab(name){
				this.currentCom = name;
				this.setMychart();
			}
		},
		components:{
			vline,vbar
		}
	}
</script>

<style scoped="scoped" lang="scss">
	ul{
		overflow: hidden;
	}
	ul li{
		float: left;
		width: 100px;
		height: 40px;
		line-height: 40px;
		text-align: center;
		border: 1px solid #ddd;
		margin-right: 30px;
	}
	.show{
		height: 400px;
		width: 400px;
		border: 1px solid #ddd;
	}
</style>