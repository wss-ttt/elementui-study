import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
const VueRouterPush = Router.prototype.push 
Router.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
}
export default new Router({
	routes: [
		{
			path: '/',
			name: 'HelloWorld',
			component: HelloWorld
		},
		// 公共测试页面
		{
			path:'/blog',
			name:'blog',
			component: resolve => require(['@/views/page/blog.vue'], resolve),
		},
		{
			path:'/news',
			name:'news',
			component: resolve => require(['@/views/page/news.vue'], resolve),
		},
		{
			path:'/photo',
			name:'photo',
			component: resolve => require(['@/views/page/photo.vue'], resolve),
		},
		// communication 组件之间的通信(非父子组件之间的通信)
		{
			path:'/communication',
			name:'communication',
			component: resolve => require(['@/views/communication/main.vue'], resolve),
		},
		// element-ui组件学习
		{
			path: '/001-form',
			name:'001-form',
			component: resolve => require(['@/views/test/001-form.vue'], resolve),
		},
		{
			path: '/002-radio',
			name:'002-radio',
			component: resolve => require(['@/views/test/002-radio.vue'], resolve),
		},
		{
			path: '/003-radio',
			name:'003-radio',
			component: resolve => require(['@/views/test/003-radio.vue'], resolve),
		},
		{
			path: '/004-table',
			name:'004-table',
			component: resolve => require(['@/views/test/004-table.vue'], resolve),
		},
		{
			path: '/004-table2',
			name:'004-table2',
			component: resolve => require(['@/views/test/004-table2.vue'], resolve),
		},
		{
			path: '/005-tree',
			name:'005-tree',
			component: resolve => require(['@/views/test/005-tree.vue'], resolve),
		},
		{
			path: '/005-tree2',
			name:'005-tree2',
			component: resolve => require(['@/views/test/005-tree2.vue'], resolve),
		},
		{
			path: '/006-popover',
			name:'006-popover',
			component: resolve => require(['@/views/test/006-popover.vue'], resolve),
		},
		{
			path: '/007-input',
			name:'007-input',
			component: resolve => require(['@/views/test/007-input.vue'], resolve),
		},
		{
			path: '/008-popover',
			name:'008-popover',
			component: resolve => require(['@/views/test/008-popover.vue'], resolve),
		},
		{
			path: '/009-tooltip',
			name:'009-tooltip',
			component: resolve => require(['@/views/test/009-tooltip.vue'], resolve),
		},
		{
			path: '/010-card',
			name:'010-card',
			component: resolve => require(['@/views/test/010-card.vue'], resolve),
		},
		{
			path: '/011-card',
			name:'011-card',
			component: resolve => require(['@/views/test/011-card.vue'], resolve),
		},
		{
			path: '/012-divider',
			name:'012-divider',
			component: resolve => require(['@/views/test/012-divider.vue'], resolve),
		},
		{
			path: '/013-validate',
			name:'013-validate',
			component: resolve => require(['@/views/test/013-validate'], resolve),
		},
		{
			path: '/014-validate',
			name:'014-validate',
			component: resolve => require(['@/views/test/014-validate'], resolve),
		},
		{
			path: '/015-tree',
			name:'015-tree',
			component: resolve => require(['@/views/test/015-tree'], resolve),
		},
		{
			path: '/016-form',
			name:'016-form',
			component: resolve => require(['@/views/test/016-form'], resolve),
		},
		{
			path: '/017-form',  // 放入多个表单进行切换
			name:'017-form',
			component: resolve => require(['@/views/test/017-form'], resolve),
		},
		{
			path: '/018-dialog',  // 弹出框+表单的使用
			name:'018-dialog',
			component: resolve => require(['@/views/test/018-dialog'], resolve),
		},
		{
			path: '/019-dialog_form',  // 弹出框+表单的使用
			name:'019-dialog_form',
			component: resolve => require(['@/views/test/019-dialog_form'], resolve),
		},
		{
			path: '/020-resetform',  // 弹出框+表单的使用
			name:'020-resetform',
			component: resolve => require(['@/views/test/020-resetform'], resolve),
		},
		{
			path: '/021-add',  // 新增
			name:'021-add',
			component: resolve => require(['@/views/test/021-add'], resolve),
		},
		{
			path: '/022-add2',  // 新增
			name:'022-add2',
			component: resolve => require(['@/views/test/022-add2'], resolve),
		},
		{
			path: '/023-array',  // 新增
			name:'023-array',
			component: resolve => require(['@/views/test/023-array'], resolve),
		},
		{
			path: '/023-radio',  // 新增
			name:'023-radio',
			component: resolve => require(['@/views/test/023-radio'], resolve),
		},
		{
			path: '/024-crud',  // 新增
			name:'024-crud',
			component: resolve => require(['@/views/test/024-crud'], resolve),
		},
		{
			path:'/025-scss',
			name:'025-scss',
			component: resolve => require(['@/views/test/025-scss'], resolve),
		},
		{
			path:'/026-update_css',
			name:'026-update_css',
			component: resolve => require(['@/views/test/026-update_css'], resolve),
		},
		{
			path:'/027-pickerdate',
			name:'027-pickerdate',
			component: resolve => require(['@/views/test/027-pickerdate'], resolve),
		},
		{
			path:'/028-ajax',
			name:'028-ajax',
			component: resolve => require(['@/views/test/028-ajax'], resolve),
		},
		{
			path:'/029-checkbox',
			name:'029-checkbox',
			component: resolve => require(['@/views/test/029-checkbox'], resolve),
		},
		{
			path:'/030-click',
			name:'030-click',
			component: resolve => require(['@/views/test/030-click'], resolve),
		},
		{
			path:'/031-router',
			name:'013-router',
			component: resolve => require(['@/views/test/031-router'], resolve),
		},
		{
			path:'/032-store',
			name:'032-store',
			component: resolve => require(['@/views/test/032-store'], resolve),
		},
		{
			path:'/033-dropdown',
			name:'033-dropdown',
			component: resolve => require(['@/views/test/033-dropdown'], resolve),
		},
		{
			path:'/034-$router',
			name:'034-$router',
			component: resolve => require(['@/views/test/034-$router'], resolve),
		},
		{
			path:'/035-tabs',
			name:'035-tabs',
			component: resolve => require(['@/views/test/035-tabs'], resolve),
		},
		{
			path:'/036-FormData',
			name:'036-FormData',
			component: resolve => require(['@/views/test/036-FormData'], resolve),
		},
		{
			path:'/037-xsl',
			name:'037-xsl',
			component: resolve => require(['@/views/test/037-xsl'], resolve),
		},
		{
			path:'/038-promise',
			name:'038-promise',
			component: resolve => require(['@/views/test/038-promise'], resolve),
		},
		{
			path:'/039-table',
			name:'039-table',
			component: resolve => require(['@/views/test/039-table'], resolve),
		},
		{
			path:'/040-select',
			name:'040-select',
			component: resolve => require(['@/views/test/040-select'], resolve),
		},
		{
			path:'/041-cacs',
			name:'041-cacs',
			component: resolve => require(['@/views/test/041-cacs'], resolve),
		},
		// test2文件
		{
			path:'/001-nextTick',
			name:'001-nextTick',
			component: resolve => require(['@/views/test2/001-nextTick'], resolve),
		},
		{
			path:'/002-created_mounted',
			name:'002-created_mounted',
			component: resolve => require(['@/views/test2/002-created_mounted'], resolve),
		},
		{
			path:'/003-component',
			name:'003-component',
			component: resolve => require(['@/views/test2/003-component'], resolve),
		},
		{
			path:'/004-test',
			name:'004-test',
			component: resolve => require(['@/views/test2/004-test'], resolve),
		},
		{
			path:'/005-messagecenter',
			name:'005-messagecenter',
			component:resolve=>require(['@/views/test2/005-messagecenter'],resolve)
		},
		{
			path:'/006-json',
			name:'006-json',
			component:resolve=>require(['@/views/test2/006-json'],resolve)
		},
		{
			path:'/007-temp',
			name:'007-temp',
			component:resolve=>require(['@/views/test2/007-temp'],resolve)
		},
		{
			path:'/008-card',
			name:'008-card',
			component:resolve=>require(['@/views/test2/008-card'],resolve)
		},
		{
			path:'/009-input',
			name:'009-input',
			component:resolve=>require(['@/views/test2/009-input'],resolve)
		},
		{
			path:'/010-render2',
			name:'010-render2',
			component:resolve=>require(['@/views/test2/010-render2'],resolve)
		},
		{
			path:'/010-render3',
			name:'010-render3',
			component:resolve=>require(['@/views/test2/010-render3'],resolve)
		},
		{
			path:'/010-render4',
			name:'010-render4',
			component:resolve=>require(['@/views/test2/010-render4'],resolve)
		},
		{
			path:'/011-computed',
			name:'011-computed',
			component:resolve=>require(['@/views/test2/011-computed'],resolve)
		},
		{
			path:'/012-clientHeight',
			name:'012-clientHeight',
			component:resolve=>require(['@/views/test2/012-clientHeight'],resolve)
		},
		{
			path:'/012-clientHeight2',
			name:'012-clientHeight2',
			component:resolve=>require(['@/views/test2/012-clientHeight2'],resolve)
		},
		{
			path:'/012-directive',
			name:'012-directive',
			component:resolve=>require(['@/views/test2/012-directive.vue'],resolve)
		},
		{
			path:'/013-filter',
			name:'013-filter',
			component:resolve=>require(['@/views/test2/013-filter.vue'],resolve)
		},
		{
			path:'/014-set2',
			name:'014-set2',
			component:resolve=>require(['@/views/test2/014-set2.vue'],resolve)
		},
		{
			path:'/014-set3',
			name:'014-set3',
			component:resolve=>require(['@/views/test2/014-set3.vue'],resolve)
		},
		{
			path:'/014-set4',
			name:'014-set4',
			component:resolve=>require(['@/views/test2/014-set4.vue'],resolve)
		},
		{
			path:'/014-set5',
			name:'014-sett5',
			component:resolve=>require(['@/views/test2/014-set5.vue'],resolve)
		},
		{
			path:'/015-form-params',
			name:'015-form-params',
			component:resolve=>require(['@/views/test2/015-form-params.vue'],resolve)
		},
		{
			path:'/016-layout',
			name:'016-layout',
			component:resolve=>require(['@/views/test2/016-layout.vue'],resolve)
		},
		{
			path:'/017-Cascader',
			name:'017-Cascader',
			component:resolve=>require(['@/views/test2/017-Cascader.vue'],resolve)
		},
		{
			path:'/018-data',
			name:'018-data',
			component:resolve=>require(['@/views/test2/018-data.vue'],resolve)
		},
		// 布局的学习
		{
			path:'/main',
			name:'main',
			component: resolve => require(['@/views/layout/main'], resolve),
			children:[
				{
					path:'test',
					name:'test',
					component: resolve => require(['@/views/layout/components/test'], resolve),
				}
			]
		},
		{
			path:'/header2',
			name:'header2',
			component: resolve => require(['@/views/layout/header2'], resolve),
		},
		{
			path:'/header_sidebar',    // header组件需要控制siderbar组件
			name:'header_sidebar',
			component: resolve => require(['@/views/layout/header_sidebar'], resolve),
		},
		{
			path:'/header_sidebar_content',    // 右侧的区域也会随着菜单的变化而变化
			name:'header_sidebar_content',
			component: resolve => require(['@/views/layout/header_sidebar_content'], resolve),
		},
		// 全屏插件的使用
		{
			path:'/fullscreen',
			name:'fullscreen',
			component: resolve => require(['@/views/fullscreen_use/index'], resolve),
		},
		// 菜单的学习
		{
			path:'/menu',    // 学习导航菜单的使用
			name:'menu',
			component: resolve => require(['@/views/菜单学习/index'], resolve),
		},
		{
			path:'/menu2',    // 学习导航菜单的使用
			name:'menu2',
			component: resolve => require(['@/views/菜单学习/index2'], resolve),
		},
		{
			path:'/menu3',    // 学习导航菜单的使用
			name:'menu3',
			component: resolve => require(['@/views/菜单学习/index3'], resolve),
		},
		{
			path:'/menu4',    // 循环菜单数据
			name:'menu4',
			component: resolve => require(['@/views/菜单学习/index4'], resolve),
		},
		{
			path:'/menu5',    // 循环菜单数据 带有子项 只有两级
			name:'menu5',
			component: resolve => require(['@/views/菜单学习/index5'], resolve),
		},
		{
			path:'/menu6',    // 循环菜单数据 带有子项 只有三级
			name:'menu6',
			component: resolve => require(['@/views/菜单学习/index6'], resolve),
		},
		{
			path:'/menu7',    // 循环菜单数据 带有子项 只有三级
			name:'menu7',
			component: resolve => require(['@/views/菜单学习/index7'], resolve),
		},
		{
			path:'/menu8',    // 循环菜单数据 带有子项 只有三级
			name:'menu8',
			component: resolve => require(['@/views/菜单学习/index8'], resolve),
		},
		{
			path:'/menu9',    // 递归显示菜单数据的加载
			name:'menu9',
			component: resolve => require(['@/views/菜单学习/index9'], resolve),
		},
		{
			path:'/menu10',    // 递归显示菜单数据的加载
			name:'menu10',
			component: resolve => require(['@/views/菜单学习/index10'], resolve),
		},
		{
			path:'/menu11',    // 递归显示菜单数据的加载
			name:'menu11',
			component: resolve => require(['@/views/菜单学习/index11'], resolve),
		},
		{
			path:'/menu12',    // 菜单加路由跳转
			name:'menu12',
			component: resolve => require(['@/views/菜单学习/index12'], resolve),
		},
		// show文件夹
		{
			path:'/page',
			name:'page',
			component: resolve => require(['@/views/show/page.vue'], resolve),
		},
		
		// login文件夹
		{
			path:'/login',
			name:'login',
			component: resolve => require(['@/views/login/login.vue'], resolve),
		},
		{
			path:'/dashboard',
			name:'dashboard',
			component: resolve => require(['@/views/login/dashboard.vue'], resolve),
		},
		// eCharts文件夹
		{
			path:'/echartMain',
			name:'echartMain',
			component: resolve => require(['@/views/eCharts/echartsMain.vue'], resolve),
		},
		{
			path:'/echartMain2',
			name:'echartMain2',
			component: resolve => require(['@/views/eCharts/echartsMain2.vue'], resolve),
		},
		{
			path:'/001-echart',
			name:'001-echart',
			component: resolve => require(['@/views/eCharts/001-echart.vue'], resolve),
		},
		{
			path:'/row1',
			name:'row1',
			component: resolve => require(['@/views/row/Index.vue'], resolve),
		},
		{
			path:'/001-alert',
			name:'001-alert',
			component: resolve => require(['@/views/源码学习/001-alert.vue'], resolve),
		},
		{
			path:'/002-message',
			name:'002-message',
			component: resolve => require(['@/views/源码学习/002-message.vue'], resolve),
		},
		{
			path:'/dynamic-table',      // 动态表格  列的位置是固定的
			name:'dynamic-table',
			component: resolve => require(['@/views/table/dynamic-table'], resolve),
		},
		{
			path:'/inline-edit-table',
			name:'inline-edit-table',
			component: resolve => require(['@/views/table/inline-edit-table'], resolve),
		},
		// excel study
		{
			path:'/001-excel',
			name:'001-excel',
			component: resolve => require(['@/views/excel/001-excel.vue'], resolve),
		},
		{
			path:'/test3-001',
			name:'test3-001',
			component: resolve => require(['@/views/test3/index.vue'], resolve),
		},
		{
			path:'/test3-002',
			name:'test3-002',
			component: resolve => require(['@/views/test3/index2.vue'], resolve)
		},
		{
			path:'/test3-003',
			name:'test3-003',
			component: resolve => require(['@/views/test3/index3.vue'], resolve)
		},
		{
			path:'/test3-004',
			name:'test3-004',
			component: resolve => require(['@/views/test3/index4.vue'], resolve)
		},
		{
			path:'/test3-main',
			name:'test3-main',
			component: resolve => require(['@/views/test3/main.vue'], resolve),
			children:[
				{
					path:'index3',
					name:'index3',
					component: resolve => require(['@/views/test3/index3.vue'], resolve)
				},
				{
					path:'index4',
					name:'index4',
					component: resolve => require(['@/views/test3/index4.vue'], resolve)
				}
			]
		},
		{
			path:'/test3-005',
			name:'test3-005',
			component: resolve => require(['@/views/test3/index5.vue'], resolve)
		},
		// 文件夹 echarts2
		{
			path:'/echart2-index',
			name:'echart2-index',
			component: resolve => require(['@/views/echarts2/index.vue'], resolve)
		},
		{
			path:'/test4/index',
			name:'test4-index',
			component: resolve => require(['@/views/test4/index.vue'], resolve)
		},
		{
			path:'/test4/index2',
			name:'test4-index2',
			component: resolve => require(['@/views/test4/index2.vue'], resolve)
		},
		{
			path:'/test4/index3',
			name:'test4-index3',
			component: resolve => require(['@/views/test4/index3.vue'], resolve)
		},
		{
			path:'/test4/index4',
			name:'test4-index4',
			component: resolve => require(['@/views/test4/index4.vue'], resolve)
		},
		{
			path: '/test4/index5',
			name: 'test4-index5',
			component: resolve => require(['@/views/test4/index5.vue'], resolve)
		},
		{
			path: '/test4/index6', // element-ui el-drawer动画抖动原因
			name: 'test4-index6',
			component: resolve => require(['@/views/test4/index6.vue'], resolve)
		},
		{
			path: '/test4/index7', // 总结遮罩层的两种结构实现方法
			name: 'test4-index7',
			component: resolve => require(['@/views/test4/index7.vue'], resolve)
		},
		{
			path: '/test4/index8',
			name: 'test4-index8',
			component: resolve => require(['@/views/test4/index8.vue'], resolve)
		},
		{
			path: '/test4/index9',
			name: 'test4-index9',
			component: resolve => require(['@/views/test4/index9.vue'], resolve)
		},
		{
			path: '/test5/index',
			name: 'test5-index',
			component: resolve => require(['@/views/test5/index.vue'], resolve)
		},
		{
			path: '/test5/index2',
			name: 'test5-index2',
			component: resolve => require(['@/views/test5/index2.vue'], resolve)
		},
		{
			path: '/test5/index3',
			name: 'test5-index3',
			component: resolve => require(['@/views/test5/index3.vue'], resolve)
		},
		{
			path: '/test5/index4',
			name: 'test5-index4',
			component: resolve => require(['@/views/test5/index4.vue'], resolve)
		},
		{
			path: '/test5/index5',
			name: 'test5-index5',
			component: resolve => require(['@/views/test5/index5.vue'], resolve)
			
		},
		{
			path: '/test5/index6',
			name: 'test5-index6',
			component: resolve => require(['@/views/test5/index6.vue'], resolve)
		},
		{
			path: '/test6/index',
			name: 'test6-index',
			component: resolve => require(['@/views/test6/index.vue'], resolve)

		},
		{
			path: '/test6/index2',
			name: 'test6-index2',
			component: resolve => require(['@/views/test6/index2.vue'], resolve)

		},
		{
			path: '/test6/index3',
			name: 'test6-index3',
			component: resolve => require(['@/views/test6/index3.vue'], resolve),
			children: [
				{
					path: 'B',
					name: 'test6-index3-b',
					component: resolve => require(['@/views/test6/components/B.vue'], resolve),
				},
				{
					path: 'C',
					name: 'test6-index3-c',
					component: resolve => require(['@/views/test6/components/C.vue'], resolve),
				},
				{
					path: 'D',
					name: 'test6-index3-d',
					component: resolve => require(['@/views/test6/components/D.vue'], resolve),

				}
			]
		},
		{
			path: '/test6/index4',
			name: 'test6-index4',
			component: resolve => require(['@/views/test6/index4.vue'], resolve),
			children: [
				{
					path: 'details/:id',
					name: 'details',
					component: resolve => require(['@/views/test6/details.vue'], resolve),
				},
			]
		},
		{
			path: '/test6/index5',
			name: 'test6-index5',
			component: resolve => require(['@/views/test6/index5.vue'], resolve),
			children: [
				{
					path: 'index5-e',
					name: 'index5-e',
					component: resolve => require(['@/views/test6/components/E.vue'], resolve),
				}
			]
		},
		{
			path: '/test6/index7',
			name: 'test6-index7',
			component: resolve => require(['@/views/test6/index7.vue'], resolve),
		},
		{
			path: '/test6/index8',
			name: 'test6-index8',
			component: resolve => require(['@/views/test6/index8.vue'], resolve),
		},
		{
			path: '/test7/index',
			name: 'test7-index',
			component: resolve => require(['@/views/test7/index.vue'], resolve),
			children: [
				{
					path: 'A',
					name: 'A',
					component: resolve => require(['@/views/test7/components/A.vue'], resolve),
				},
				{
					path: 'B',
					name: 'B',
					component: resolve => require(['@/views/test7/components/B.vue'], resolve),
				},
				{
					path: 'C',
					name: 'C',
					component: resolve => require(['@/views/test7/components/C.vue'], resolve),
					children: [{
						path: 'C1',
						name: 'C1',
						component: resolve => require(['@/views/test7/components/C1.vue'], resolve),
					},{
						path: 'C2',
						name: 'C2',
						component: resolve => require(['@/views/test7/components/C2.vue'], resolve),
					}]
				}
			]
		},
		{
			path: '/test7/index2',
			name: 'test7-index2',
			component: resolve => require(['@/views/test7/index2.vue'], resolve),
			children: [{
				path: 'd',
				name: 'D',
				component: resolve => require(['@/views/test7/components/D.vue'], resolve),
			}]
		},
		{
			path: '/test8/index',
			name: 'test8-index',
			component: resolve => require(['@/views/test8/index.vue'], resolve),
			children: [{
				path: 'aa',
				name: 'AA',
				component: resolve => require(['@/views/test8/components/AA.vue'], resolve),
				meta: {
					keepAlive: true
				}
			},{
				path: 'bb',
				name: 'BB',
				component: resolve => require(['@/views/test8/components/BB.vue'], resolve),
				meta: {
					keepAlive: false
				}
			},{
				path: 'cc',
				name: 'CC',
				component: resolve => require(['@/views/test8/components/CC.vue'], resolve),
				meta: {
					keepAlive: true
				}
			}]
		},
		{
			path: '/test8/index2',
			name: 'test8-index2',
			component: resolve => require(['@/views/test8/index2.vue'], resolve),
		},
		{
			path: '/test9/list',
			name: 'test9-list',
			component: resolve => require(['@/views/test9/list.vue'], resolve),
			children: [{
				path: 'details/:id',
				name: 'test9-details',
				component: resolve => require(['@/views/test9/details.vue'], resolve),
			}]
		},
		{
			path: '/test9/table',
			name: 'test9-table',
			component: resolve => require(['@/views/test9/table.vue'], resolve)
		},
		{
			path: '/swiper/index',
			name: 'swiper-index',
			component: resolve => require(['@/views/swiper/index.vue'], resolve)
		},
		{
			path: '/swiper/index2',
			name: 'swiper-index2',
			component: resolve => require(['@/views/swiper/index2.vue'], resolve)
		},
		{
			path: '/swiper/index3',
			name: 'swiper-index3',
			component: resolve => require(['@/views/swiper/index3.vue'], resolve)
		},
		{
			path: '/swiper/index4',
			name: 'swiper-index4',
			component: resolve => require(['@/views/swiper/index4.vue'], resolve)
		},
		{
			path: '/swiper/index5',
			name: 'swiper-index5',
			component: resolve => require(['@/views/swiper/index5.vue'], resolve)
		},
		{
			path: '/swiper/index6',
			name: 'swiper-index6',
			component: resolve => require(['@/views/swiper/index6.vue'], resolve)
		},
		{
			path: '/swiper/index7',
			name: 'swiper-index7',
			component: resolve => require(['@/views/swiper/index7.vue'], resolve)
		},
		{
			path: '/swiper/index8',
			name: 'swiper-index8',
			component: resolve => require(['@/views/swiper/index8.vue'], resolve)
		},
		{
			path: '/drawer/index',
			name: 'drawer-index',
			component: resolve => require(['@/views/drawer/index.vue'], resolve)
		}
	]
})
