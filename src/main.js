// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'

// import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/element-ui/index.css'
import store from './store/index.js'
import '@/assets/css/global.css'
// vue-awesome-swiper插件全局引入 -- 开始
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'    //在全局没引入，这里记得要！
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
// vue-awesome-swiper插件全局引入 -- 结束
import './global2'
import './utils/directives.js'
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$ajax = axios


// 定义全局的filter
Vue.filter('hello', function (msg) {
  return msg + 'hello'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,  // 注入store
  components: { App },
  template: '<App/>'
})
