/** 
 * api接口的统一封装
 */
import request from './api-manager.js';

function apiShowLoading(loadding_flag, loadding_text) {
	if (loadding_flag) {
		//加载提示
		uni.showLoading({
			title: loadding_text,
			mask: true
		});
	}
}

// 发送验证码
export function home(query, loadding_flag = true, loadding_text = "加载中...") {
	apiShowLoading(loadding_flag, loadding_text)
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
