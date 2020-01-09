<template>
	<div>
		<div style="width:750rpx;text-align:center;margin-top:200rpx;">我是首页啊</div>
		<div>{{test}}</div>
		<i-button>我是iview的组件</i-button>
	</div>
</template>
<script>
	import {
		byLevelGetUserInfo
	} from "../../utils/wxUtil.js";
	import {
		user_getXCXOpenId
	} from "../../utils/project-api";

	import http from '../../utils/http.js'

	import {
		home
	} from '../../utils/project-api.js'
	export default {
		data() {
			return {
				ads: [],
				test: "测试",
				value: ""
			};
		},
		//点击获取用户信息接口返回信息
		methods: {
			getAd() {
				user_getXCXOpenId({}, res => {
					if (res.result) {
						console.log("---------");
					}
				});
			}
		},

		async beforeMount() {
			console.log("21313123");
			// get 请求
			// https://debanni.isart.me
			// http.get('page/index/home', [{
			// 	test: 123
			// }]).then((res) => {
			// 	console.log("1111");
			// }).catch(error => {
			// 	console.log("222");
			// }).finally(() => {
			// 	console.log("333");
			// })

			home({
				invitationCode: 12313
			}).then((response) => {
				console.log(response);
			}).catch((error) => {
				console.log(error)
			}).finally(() => {
				console.log("333");
			})



			this.test = "efaef";
			// let userInfo = await byLevelGetUserInfo(2);
		},
		// 分享小程序
		onShareAppMessage(res) {
			let shareJson = this.$shareUtil({
				title: mch_info.name,
				path: `/pages/index/main?`
			});
			console.log("分享:" + JSON.stringify(shareJson));
			return shareJson;
		}
	};
</script>
<style scoped>
</style>
