// 入口js
import Vue from 'vue'
import App from './App'
//引入路由器
import router from './router/index.js'
//关闭生产提示
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	render: h => h(App),
})
