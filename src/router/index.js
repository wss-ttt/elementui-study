import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

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
			path: '/005-tree',
			name:'005-tree',
			component: resolve => require(['@/views/test/005-tree.vue'], resolve),
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
			path:'/header_sidebar_content',    // header组件需要控制siderbar组件
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
		}
	]
})
