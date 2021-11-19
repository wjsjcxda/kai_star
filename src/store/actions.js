/*通过mutation间接更新state的多个方法的对象 */
//引入方法名
import {RECEIVE_ADDRESS,RECEIVE_FOOTTYPES,RECEIVE_SHOPS} from './mutation-types.js'
//引入用封装的ajax请求的方法
import { reqAddress,reqFoodTypes,resShops } from "../api/index.js"
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
		const result=await resShops(longitude,latitude)
		//提交一个mutation
		if(result.code === 0) {
			const shops = result.data
			commit(RECEIVE_SHOPS,{shops})
		}
		
	}
}