<template>
	<div class="box">
		请选择日期时间
		<el-date-picker 
		v-model="value" 
		type="date" 
		placeholder="选择日期" 
		format="yyyy 年 MM 月 dd 日" 
		value-format="yyyy-MM-dd">
		</el-date-picker>
		<br>
		你选择的日期是:{{value}}
		<hr>
		带有快捷选项的日期选择器:
		<el-date-picker 
		v-model="value2" 
		type="date" 
		placeholder="选择日期" 
		format="yyyy 年 MM 月 dd 日" 
		value-format="yyyy-MM-dd"
		:picker-options="pickerOptions" align="center">
		</el-date-picker>
		<hr>
		<el-button @click="setDate">设置时间值</el-button>
	</div>
</template>

<script>
	export default {
		name: '',
		data() {
			return {
				value: '2019-04-09',
				value2: '',   // 回显设置默认值
				pickerOptions: {
					shortcuts: [{
						text: '今天',
						onClick(picker) {
							picker.$emit('pick', new Date());
							console.log('今天');
							test();
						}
					}, {
						text: '昨天',
						onClick(picker) {
							const date = new Date();
							date.setTime(date.getTime() - 3600 * 1000 * 24);
							picker.$emit('pick', date);
							console.log('昨天');
						}
					}, {
						text: '一周前',
						onClick(picker) {
							const date = new Date();
							date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
							picker.$emit('pick', date);
							console.log('一周前');
						}
					},{
						text:'确定',
						onClick(){
							console.log('我是确定');
						}
					}]
				}
			}
		},
		methods:{
			init(){
				console.log('init');
			},
			setDate(){
				this.value2 = '2018-10-10';
			}
		}
	}
	function test(){
		console.log('好好哦学习 天天向上');
	}
</script>

<style>
</style>
