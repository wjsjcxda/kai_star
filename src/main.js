// 入口js
import Vue from 'vue'
import App from './App'
//引入路由器
import router from './router/index.js'
//引入Vuex
import store from './store/index.js'
//关闭生产提示
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,//使用上vue-router
	store,//使用上vuex
	render: h => h(App),
})
