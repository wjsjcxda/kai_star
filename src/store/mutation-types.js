/* 包含n个mutation的type常量 */

export const RECEIVE_ADDRESS = 'receive_address'  //接收地址
export const RECEIVE_FOOTTYPES = 'receive_foodtypes'  //接收食品分类数组
export const RECEIVE_SHOPS = 'receive_shps'  //接收商家数组
export const RECEIVE_USER_INFO = 'receive_user_info'  //接收用户信息
export const RECEIVE_SHOPLIST = 'receive_ shoplist' //根据经纬度搜索接收商家列表
export const RECEIVE_CAPTCHA = 'receive_captcha'//获取图形验证码
export const RECEIVE_USERINFO = 'receive_userinfo'//获取用户信息
export const RESET_USER_INFO = 'reset_user_info'//重置用户信息

export const RECEIVE_GOODS = 'receive_goods' // 接收商品数组
export const RECEIVE_RATINGS = 'receive_ratings' // 接收商家评价数组
export const RECEIVE_INFO = 'receive_info' // 接收商家信息

export const INCREMENT_FOOD_COUNT = 'increment_food_count' // 增加food中的count值
export const DECREMENT_FOOD_COUNT = 'decrement_food_count' //减少food中的count值
export const CLEAR_CART = 'clear_cart' //清空购物车

export const RECEIVE_SEARCH_SHOPS = 'receive_search_shops' // 接收搜索的商家数组