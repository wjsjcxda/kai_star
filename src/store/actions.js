/*通过mutation间接更新state的多个方法的对象 */
//引入方法名
import {RECEIVE_ADDRESS,RECEIVE_FOOTTYPES,RECEIVE_SHOPS,
		RECEIVE_SHOPLIST,RECEIVE_CAPTCHA,RECEIVE_USERINFO,
		RESET_USER_INFO,RECEIVE_USER_INFO} from './mutation-types.js'
//引入用封装的ajax请求的方法
import {	reqAddress,reqFoodTypes,reqShops,reqShopList,
			reqCaptcha,reqUserInfo,reqLogout } from "../api/index.js"
export default {
	//异步获取地址
	async getAddress({commit,state}){
		//发送异步ajax请求
		const geohash = state.latitude + ',' + state.longitude
		const result=await reqAddress(geohash)
		//提交一个mutation
		if(result.code === 0) {
			const address = result.data
			commit(RECEIVE_ADDRESS,{address})
		}
		
	},
	//异步获取食品分类数组
	async getFoodTypes({commit}){
		//发送异步ajax请求
		const result=await reqFoodTypes()
		//提交一个mutation
		if(result.code === 0) {
			const foodtypes = result.data
			commit(RECEIVE_FOOTTYPES,{foodtypes})
		}
		
	},
	//异步获取商家数组
	async getShops({commit,state}){
		//发送异步ajax请求
		const {longitude,latitude} = state
		const result=await reqShops(longitude,latitude)
		//提交一个mutation
		if(result.code === 0) {
			const shops = result.data
			commit(RECEIVE_SHOPS,{shops})
		}
		
	},
	
	//同步记录用户信息
	saveUser({commit},userInfo){
		commit(RECEIVE_USER_INFO,{userInfo})
	},
	//异步获取用户信息
	async getUserInfo ({commit}){
		const result = await reqUserInfo()
		if(result.code===0){
			const userInfo = result.data
			commit(RECEIVE_USER_INFO,{userInfo})
		}
	},
	//异步登出
	async logout({commit}){
		const result = await reqLogout()
		if(result.code===0){
			commit(RESET_USER_INFO)
		}
	}
}