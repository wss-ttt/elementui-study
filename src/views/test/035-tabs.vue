<template>
	<div class="wrapper">
		<el-button @click="addTab">add tab</el-button>
		<el-tabs v-model="activeTab" closable type="" @tab-remove="removeTab">
			<el-tab-pane v-for="(item,index) in tabsList" 
				:key="item.name" 
				:label="item.title" 
				:name="item.name">
				{{item.content}}
			</el-tab-pane>
		</el-tabs>
		<hr />
		<div class="show">
			当前显示的是{{activeTab}}面板
		</div>
	</div>
</template>

<script>
	export default{
		name:'',
		data(){
			return{
				activeTab:'shouye',  // 默认显示哪一个tab标签页
				tabsList:[
					{
						title:'首页',
						name:'shouye',
						content:'我是首页'
					},
					{
						title:'博客',
						name:'blog',
						content:'我是博客'
					},
					{
						title:'新闻',
						name:'news',
						content:'我是新闻'
					},
					{
						title:'相册',
						name:'photo',
						content:'我是相册'
					},
				]
			}
		},
		methods:{
			addTab(){
				// 此处只能添加一次	
				this.tabsList.push({
					title:'课程',
					name:'course',
					content:'我是课程'
				});
			},
			removeTab(targetName){
				// console.log(targetName);   // 输出的name属性值  
				let tabs = this.tabsList;
				let activeName = this.activeTab;   // 当前活动的面板
				// 如果删除的是当前激活的tab,需要让其后一个tab进行active或者前一个
				if(activeName === targetName){
					tabs.forEach((tab,index)=>{
						if(tab.name === targetName){
							let nextTab = tabs[index+1]||tabs[index-1];
							if(nextTab){
								activeName = nextTab.name;
							}
						}
					})
				}
				// 设置active的tab
				this.activeTab = activeName;
				// 删除tab标签页
				this.tabsList = tabs.filter(tab=>tab.name!==targetName);
				console.log(this.tabsList);
			}
		}
		
	}
</script>

<style lang="scss" scoped="scoped">
	.show{
		margin-top: 50px;
	}
</style>