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
			component: resolve => require(['@/views/001-form.vue'], resolve),
		},
		{
			path: '/002-radio',
			component: resolve => require(['@/views/002-radio.vue'], resolve),
		},
		{
			path: '/003-radio',
			component: resolve => require(['@/views/003-radio.vue'], resolve),
		},
		{
			path: '/004-table',
			component: resolve => require(['@/views/004-table.vue'], resolve),
		},
		{
			path: '/005-tree',
			component: resolve => require(['@/views/005-tree.vue'], resolve),
		},
		{
			path: '/006-popover',
			component: resolve => require(['@/views/006-popover.vue'], resolve),
		},
		{
			path: '/007-input',
			component: resolve => require(['@/views/007-input.vue'], resolve),
		},
		{
			path: '/008-popover',
			component: resolve => require(['@/views/008-popover.vue'], resolve),
		},
		{
			path: '/009-tooltip',
			component: resolve => require(['@/views/009-tooltip.vue'], resolve),
		},
		{
			path: '/010-card',
			component: resolve => require(['@/views/010-card.vue'], resolve),
		},
		{
			path: '/011-card',
			component: resolve => require(['@/views/011-card.vue'], resolve),
		},
		{
			path: '/012-divider',
			component: resolve => require(['@/views/012-divider.vue'], resolve),
		},
		{
			path: '/013-validate',
			component: resolve => require(['@/views/013-validate'], resolve),
		},
		{
			path: '/014-validate',
			component: resolve => require(['@/views/014-validate'], resolve),
		},
		{
			path: '/015-tree',
			component: resolve => require(['@/views/015-tree'], resolve),
		},
	]
})
