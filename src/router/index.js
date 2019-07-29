import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'HelloWorld',
			component: HelloWorld
		},
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
		// 布局的学习
		{
			path:'/main',
			name:'main',
			component: resolve => require(['@/views/layout/main'], resolve),
		},
		{
			path:'/header2',
			name:'header2',
			component: resolve => require(['@/views/layout/header2'], resolve),
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
	]
})
