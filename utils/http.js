import axios from '@/js_sdk/gangdiedao-uni-axios'
import {
	judgeIsAnyNullStr
} from './common'

const DEDUG = 2
let host = ""

switch (DEDUG) {
	case 1:
		host = 'https://ylc.isart.me/api/';
		break; //正式环境
	case 2:
		host = 'https://debanni.isart.me/api/';
		break; //测试环境
	case 3:
		host = 'http://localhost/fkySrv/public/api';
		break; //本地环境
}

/**
 * 请求接口日志记录
 */
function _reqlog(req) {
	if (process.env.NODE_ENV === 'development') {
		console.log("请求地址：" + req.url, req.data || req.params)
	}
}

/**
 * 响应接口日志记录
 */
function _reslog(res) {
	if (process.env.NODE_ENV === 'development') {
		console.log(`${res.config.url}响应结果：`, res)
	}
}

// 创建自定义接口服务实例
const http = axios.create({
	// baseURL: [baseURL],
	timeout: 6000, // 不可超过 manifest.json 中配置 networkTimeout的超时时间
	// #ifdef H5
	withCredentials: true,
	// #endif
	headers: {
		'Content-Type': 'application/json',
		//'X-Requested-With': 'XMLHttpRequest',
	},
})

// 拦截器 在请求之前拦截
http.interceptors.request.use(config => {
	// _reqlog(config)

	config.url = host + config.url
	// code...
	// 获取本地存储的Cookie
	// const cookie = uni.getStorageSync('cookie')
	// 设置Cookie
	// config.headers.Cookie = cookie
	uni.showLoading({
	  title: '加载中',
	  mask: true
	})
	
	var userInfo = uni.getStorageSync("userInfo");
	if (!judgeIsAnyNullStr(userInfo)) {
	  if (judgeIsAnyNullStr(request.body.user_id)) {
	    request.body.user_id = userInfo.id
	  }
	  if (judgeIsAnyNullStr(request.body.token)) {
	    request.body.token = userInfo.token
	  }
	}
	console.log(JSON.stringify(request))
	request.headers = {
	  'X-Tag': 'flyio',
	  'content-type': 'application/json'
	}
	


	return config
})

// 拦截器 在请求之后拦截
http.interceptors.response.use(response => {
	// _reslog(response)

	// console.log("----", JSON.stringify(response))
	uni.hideLoading()
	return response // 请求成功之后将返回值返回
}, error => {
	// return Promise.reject(error.message)

	// 请求出错，根据返回状态码判断出错原因
	console.log(JSON.stringify(err))
	uni.hideLoading()
	if (err) {
		return '请求失败'
	};
})

export default http
