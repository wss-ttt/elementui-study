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
			component: resolve => require(['@/views/001-form.vue'], resolve),
		},
		{
			path: '/002-radio',
			name:'002-radio',
			component: resolve => require(['@/views/002-radio.vue'], resolve),
		},
		{
			path: '/003-radio',
			name:'003-radio',
			component: resolve => require(['@/views/003-radio.vue'], resolve),
		},
		{
			path: '/004-table',
			name:'004-table',
			component: resolve => require(['@/views/004-table.vue'], resolve),
		},
		{
			path: '/005-tree',
			name:'005-tree',
			component: resolve => require(['@/views/005-tree.vue'], resolve),
		},
		{
			path: '/006-popover',
			name:'006-popover',
			component: resolve => require(['@/views/006-popover.vue'], resolve),
		},
		{
			path: '/007-input',
			name:'007-input',
			component: resolve => require(['@/views/007-input.vue'], resolve),
		},
		{
			path: '/008-popover',
			name:'008-popover',
			component: resolve => require(['@/views/008-popover.vue'], resolve),
		},
		{
			path: '/009-tooltip',
			name:'009-tooltip',
			component: resolve => require(['@/views/009-tooltip.vue'], resolve),
		},
		{
			path: '/010-card',
			name:'010-card',
			component: resolve => require(['@/views/010-card.vue'], resolve),
		},
		{
			path: '/011-card',
			name:'011-card',
			component: resolve => require(['@/views/011-card.vue'], resolve),
		},
		{
			path: '/012-divider',
			name:'012-divider',
			component: resolve => require(['@/views/012-divider.vue'], resolve),
		},
		{
			path: '/013-validate',
			name:'013-validate',
			component: resolve => require(['@/views/013-validate'], resolve),
		},
		{
			path: '/014-validate',
			name:'014-validate',
			component: resolve => require(['@/views/014-validate'], resolve),
		},
		{
			path: '/015-tree',
			name:'015-tree',
			component: resolve => require(['@/views/015-tree'], resolve),
		},
		{
			path: '/016-form',
			name:'016-form',
			component: resolve => require(['@/views/016-form'], resolve),
		},
		{
			path: '/017-form',  // 放入多个表单进行切换
			name:'017-form',
			component: resolve => require(['@/views/017-form'], resolve),
		},
		{
			path: '/018-dialog',  // 弹出框+表单的使用
			name:'018-dialog',
			component: resolve => require(['@/views/018-dialog'], resolve),
		},
		{
			path: '/019-dialog_form',  // 弹出框+表单的使用
			name:'019-dialog_form',
			component: resolve => require(['@/views/019-dialog_form'], resolve),
		},
		{
			path: '/020-resetform',  // 弹出框+表单的使用
			name:'020-resetform',
			component: resolve => require(['@/views/020-resetform'], resolve),
		},
		{
			path: '/021-add',  // 新增
			name:'021-add',
			component: resolve => require(['@/views/021-add'], resolve),
		},
		{
			path: '/022-add2',  // 新增
			name:'022-add2',
			component: resolve => require(['@/views/022-add2'], resolve),
		},
		{
			path: '/023-array',  // 新增
			name:'023-array',
			component: resolve => require(['@/views/023-array'], resolve),
		},
		{
			path: '/023-radio',  // 新增
			name:'023-radio',
			component: resolve => require(['@/views/023-radio'], resolve),
		},
		{
			path: '/024-crud',  // 新增
			name:'024-crud',
			component: resolve => require(['@/views/024-crud'], resolve),
		},
		{
			path:'/025-scss',
			name:'025-scss',
			component: resolve => require(['@/views/025-scss'], resolve),
		},
		{
			path:'/026-update_css',
			name:'026-update_css',
			component: resolve => require(['@/views/026-update_css'], resolve),
		},
		{
			path:'/027-pickerdate',
			name:'027-pickerdate',
			component: resolve => require(['@/views/027-pickerdate'], resolve),
		},
		{
			path:'/028-ajax',
			name:'028-ajax',
			component: resolve => require(['@/views/028-ajax'], resolve),
		},
		{
			path:'/029-checkbox',
			name:'029-checkbox',
			component: resolve => require(['@/views/029-checkbox'], resolve),
		},
		{
			path:'/030-click',
			name:'030-click',
			component: resolve => require(['@/views/030-click'], resolve),
		},
		{
			path:'/031-router',
			name:'013-router',
			component: resolve => require(['@/views/031-router'], resolve),
		},
	]
})
