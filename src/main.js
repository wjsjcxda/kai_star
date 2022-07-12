// 入口js
import Vue from 'vue'
import App from './App'
//引入路由器
import router from './router/index.js'
//引入Vuex
import store from './store/index.js'
//引入Button
import {Button} from 'mint-ui'
//注册全局组件标签
Vue.component(Button.name,Button) //<mt-button>
//引入mock
import './mock/mockServer' //加载mockServer即可
// 引入图片懒加载
import VueLazyload from 'vue-lazyload'
//使用插件
//引入加载图片
import loading from './assets/loading.gif'
//引入过滤器
import './filters'
Vue.use(VueLazyload, { //内部自定义了一个指令lazy
  loading //加载中显示图片
})

//关闭生产提示
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,//使用上vue-router
	store,//使用上vuex
	render: h => h(App),
})
