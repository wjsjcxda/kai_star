import Vue from 'vue'
//引入格式化时间的插件
import dayjs from 'dayjs'
//自定义过滤器
Vue.filter('date-format',function(value,formatStr='YYYY-MM-DD HH:mm:ss') {
	//根据时间戳得到具体时间
	return 	dayjs(value).format('YYYY年MM月DD日HH:mm:ss')
})