/** 
 * api接口的统一封装
 */
import request from './http.js';

// 发送验证码
export function home(query) {
	return request({
		url: 'page/index/home',
		method: 'get',
		data: query
	})
}

// 邀请码校验
export function CheckInvitationCode(query) {
	return request({
		url: 'User/CheckInvitationCode',
		method: 'post',
		data: Qs.stringify(query)
	})
}

// 登录
export function GetUserLogin(query) {
	return request({
		url: 'User/GetUserLogin',
		method: 'post',
		data: Qs.stringify(query)
	})
}
