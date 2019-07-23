<template>
	<div class="box">
		<el-select v-model="value">
			<el-option v-for="(item,index) in arr" :label="item" :key="index" :value="index"></el-option>
		</el-select>
		选择的是:{{value}}
		<hr>
		循环遍历:
		<ul>
			<li v-for="(item,index) in arr">{{item}}</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'array',
		data(){
			return{
				arr:[
					/* '小龙女':98,
					'乔峰':80,
					'杨过':50 */
				],
				value:'',   // 被选中的值
			}
		},
		created(){
			this.init();
			// console.log(this.arr);
		},
		methods:{
			init(){
				/* this.arr['小龙女'] = 98;
				this.arr['乔峰'] = 80;
				this.arr['杨过'] = 50; */
				this.arr[0] = 98;
				this.arr[1] = 80;
				this.arr[2] = 50;
			}
		}
	}
</script>

<style>
</style>
