/* 直接更新state的多个方法的对象 */
import {RECEIVE_ADDRESS,RECEIVE_FOOTTYPES,RECEIVE_SHOPS} from './mutation-types.js'

export default {
	[RECEIVE_ADDRESS] (state,{address}){
		state.address = address
	},
	[RECEIVE_FOOTTYPES] (state,{foodtypes}){
		state.foodtypes = foodtypes
	},
	[RECEIVE_SHOPS] (state,{shops}){
		state.shops = shops
	}
}