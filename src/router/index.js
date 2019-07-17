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
	]
})
