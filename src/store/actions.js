/*通过mutation间接更新state的多个方法的对象 */
//引入方法名
import {
	RECEIVE_ADDRESS,
	RECEIVE_FOOTTYPES,
	RECEIVE_SHOPS,
	RECEIVE_SHOPLIST,
	RECEIVE_CAPTCHA,
	RECEIVE_USERINFO,
	RESET_USER_INFO,
	RECEIVE_USER_INFO,
	RECEIVE_GOODS,
	RECEIVE_RATINGS,
	RECEIVE_INFO,
	INCREMENT_FOOD_COUNT,
	DECREMENT_FOOD_COUNT,
	CLEAR_CART,
	RECEIVE_SEARCH_SHOPS
} from './mutation-types.js'
//引入用封装的ajax请求的方法
import {
	reqAddress,
	reqFoodTypes,
	reqShops,
	reqShopList,
	reqCaptcha,
	reqUserInfo,
	reqLogout,
	reqShopGoods,
	reqShopInfo,
	reqShopRatings,
} from "../api/index.js"
export default {
	//异步获取地址
	async getAddress({
		commit,
		state
	}) {
		//发送异步ajax请求
		const geohash = state.latitude + ',' + state.longitude
		const result = await reqAddress(geohash)
		//提交一个mutation
		if (result.code === 0) {
			const address = result.data
			commit(RECEIVE_ADDRESS, {
				address
			})
		}

	},
	//异步获取食品分类数组
	async getFoodTypes({
		commit
	}) {
		//发送异步ajax请求
		const result = await reqFoodTypes()
		//提交一个mutation
		if (result.code === 0) {
			const foodtypes = result.data
			commit(RECEIVE_FOOTTYPES, {
				foodtypes
			})
		}

	},
	
	//异步获取商家数组
	async getShops({
		commit,
		state
	}) {
		//发送异步ajax请求
		const {
			longitude,
			latitude
		} = state
		const result = await reqShops(longitude, latitude)
		//提交一个mutation
		if (result.code === 0) {
			const shops = result.data
			commit(RECEIVE_SHOPS, {
				shops
			})
		}

	},

	//同步记录用户信息
	saveUser({
		commit
	}, userInfo) {
		commit(RECEIVE_USER_INFO, {
			userInfo
		})
	},
	//异步获取用户信息
	async getUserInfo({
		commit
	}) {
		const result = await reqUserInfo()
		if (result.code === 0) {
			const userInfo = result.data
			commit(RECEIVE_USER_INFO, {
				userInfo
			})
		}
	},
	//异步登出
	async logout({
		commit
	}) {
		const result = await reqLogout()
		if (result.code === 0) {
			commit(RESET_USER_INFO)
		}
	},
	
	//异步获取商家信息
	async getShopInfo({commit}) {
		const result = await reqShopInfo()
		if (result.code === 0) {
			const info = result.data
			commit(RECEIVE_INFO, {info})
		}
	},
	// 异步获取商家评价列表
	async getShopRatings({commit},callback) {
		const result = await reqShopRatings()
		if (result.code === 0) {
			const ratings = result.data
			commit(RECEIVE_RATINGS, {ratings})
			callback && callback()
		}
	},
	// 异步获取商家商品列表
	async getShopGoods({commit},callback) {
		const result = await reqShopGoods()
		if (result.code === 0) {
			const goods = result.data
			commit(RECEIVE_GOODS, {goods})
			//数据更新了，通知一下组件
			// 如果组件中传递了接收消息的回调函数, 数据更新后, 调用回调通知调用的组件	
			callback && callback()
		}
	},
	
	//同步更新food中的count值
	updateFoodCount({commit},{isAdd,food}){
		if(isAdd){
			commit(INCREMENT_FOOD_COUNT,{food})
		}else{
			commit(DECREMENT_FOOD_COUNT,{food})
		}
	},
	
	//同步清空购物车
	clearCart({commit}){
		commit(CLEAR_CART)
	},
	
	// 异步获取商家商品列表
	async searchShops({commit,state},keyword) {
		const geohash = state.latitude + ',' + state.longitude
		const result = await reqShopList(geohash,keyword)
		if (result.code === 0) {
			const searchShops = result.data
			commit(RECEIVE_SEARCH_SHOPS, {searchShops})
		}
	}

}
