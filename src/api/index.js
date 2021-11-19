/* 
包含n个接口请求函数的模块
函数的返回值：promise对象 
*/
import ajax from './ajax.js'
// 1、根据经纬度获取位置详情
// http://localhost:4000/position/:geohash(经纬度) latitude:纬度,longitude：经度
export function const reqAddress = (geohash)=>ajax(`/position/${geohash}`,)
// 2、获取食品分类列表
export function const reqFoodTypes = ()=>ajax('/index_category')
// 3、根据经纬度获取商铺列表
export function const resShops = (longitude,latitude)=>ajax('/shops',{longitude,latitude})
// 4、根据经纬度和关键字搜索商铺列表]
export function const reqFoodTypes = (keyword,geohash)=>ajax('/search_shops',{keyword,geohash})
// 5、获取一次性验证码
export function const reqFoodTypes = ()=>ajax('/captcha')
// 6、用户名密码登陆
export function const reqFoodTypes = (name,owd,captcha)=>ajax('/login_pwd',{name,owd,captcha},'POST')
// 7、发送短信验证码
export function const reqFoodTypes = (phone)=>ajax('/sendcode',{phone})
// 8、手机号验证码登陆
export function const reqFoodTypes = (phone,code)=>ajax('/login_sms',{phone,code},'POST')
// 9、根据会话获取用户信息
export function const reqFoodTypes = ()=>ajax('/userinfo')
// 10、用户登出
export function const reqFoodTypes = ()=>ajax('/logout')
}