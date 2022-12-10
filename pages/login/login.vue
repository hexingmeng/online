<template>
	<view>
		<view class="login-box">
			<view class="tp" @click="fanmy">
				<image class="ttpp" src="../../static/xiangzuo.png" mode=""></image>
			</view>
		</view>
		<view class="login-white">
			<view class="aaa">
				<text class="login-font">{{ type == 'login' ? '登 录' : '注 册' }}</text>
				<view class="login-info info-input">
					<text class="iconfont icon-icon-test"></text>
					<input class="info-user" type="text" placeholder="请输入用户名" v-model="form.username">
				</view>
				<view class="login-info info-input">
					<text class="iconfont icon-mima"></text>
					<input class="info-user" placeholder="请输入密码" v-model="form.password">
				</view>
				<view class="login-info info-input" v-if="type == 'reg'">
					<text class="iconfont icon-mima"></text>
					<input class="info-user" type="text" placeholder="请输入确认密码" v-model="form.repassword" />
				</view>

				<view class="login-denglu" @click="submit">{{ type == 'login' ? '登 录' : '注 册' }}</view>

				<view class="login-applt">
					<text class="applt-sign" @click="cutlogin">{{ type == 'login' ? '注册账号' : '去登录' }}</text>
					<text class="applt-password" @click="handlePassword">忘记密码？</text>
				</view>
				<view class="logowx-top">
					<view class="logowx">
						<image src="../../static/logowx.jpg" mode=""></image>
					</view>
				</view>
				<view class="login-title"  v-if="type === 'login'">
					<checkbox @click="statement" color="#7fd49e" style="transform: scale(0.7);" />已阅读并同意用户协议&隐私声明
				</view>
			</view>

		</view>

	</view>
</template>

<script>
	import appid from "@/api/appid.js"
	import {
		log
	} from "util";
	export default {
		data() {
			return {
				ment: true,
				type: "login",
				form: {
					username: "",
					password: "",
					repassword: ""
				}
			};
		},
		// 方法
		methods: {
			statement() {
				this.ment = !this.ment
				console.log(this.ment);
			},
			fanmy() {
				uni.switchTab({
					url: "/pages/my/my"
				})
			},
			cutlogin() {
				this.type = this.type == 'login' ? 'reg' : 'login'
			},
			async submit() {
				if (this.ment&&this.type === 'login') {
					uni.showToast({
						title: '请先阅读并同意用户协议&隐私声明',
						icon: 'none',
						duration: 2000
					});
				} else if (!this.form.username) {
					uni.showToast({
						title: '用户名不能为空',
						icon: 'none',
						duration: 2000
					});
				} else if (!this.form.password) {
					uni.showToast({
						title: '密码不能为空',
						icon: 'none',
						duration: 2000
					});
				}else{
					if (this.type == 'login') {
						try {
							const res = await appid.getLogin(this.form)
							console.log("Res=>", res)
							uni.setStorageSync("userinfo", res)
							let response = uni.getStorageSync("userinfo")
							console.log(response);
							if (res.phone) {
								uni.switchTab({
									url: "/pages/my/my"
								})
							} 
							else {
								uni.navigateTo({
									url: "/pages/tele/tele"
								})
							}
						} catch (e) {
							console.log(e);
						}
					} else {
						const res = await appid.getBanner(this.form)
						console.log("Res=>", res)
						uni.navigateTo({
							url: "/pages/login/login"
						})
					}
				}
				

				// let response = uni.getStorageSync("名")
			},
			handlePassword(){
				uni.navigateTo({
					url: "/pages/forget/forget"
				})
			}
		}
	}
</script>

<style lang="scss">
	.login-box {
		width: 100vw;
		height: 220rpx;
		background: linear-gradient(to right, #3efab3, #57e8d3, #6cd8ee);
		width: 100%;
		position: relative;
	}

	.login-white {
		width: 100%;
		height: 85%;
		background-color: #fff;
		position: absolute;
		bottom: 0;
		// padding: 0 45rpx;
		box-sizing: border-box;
		border-radius: 30rpx;

		.login-font {
			display: inline-block;
			font-size: 42rpx;
			font-weight: 500;
			margin-top: 60rpx;
			margin-bottom: 40rpx;
		}

		.info-input {
			width: 100%;
			height: 100rpx;
			margin-bottom: 45rpx;
			background-color: #f5f5f5;
			border-radius: 8rpx;
			font-size: 30rpx;
			display: flex;
			align-items: center;
			padding: 0 25rpx;
			box-sizing: border-box;
			color: #818181;

			.info-user {
				margin-left: 25rpx;

			}
		}

		.login-denglu {
			width: 100%;
			height: 100rpx;
			line-height: 80rpx;
			background: #5ccc84;
			color: #ffffff;
			border-radius: 8rpx;
			text-align: center;
			line-height: 100rpx;
		}

		.login-applt {
			width: 100%;
			height: 120rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;

			.applt-sign {
				color: #5ccc84;
			}

			.applt-password {
				color: #aaa8a6;
			}
		}



	}

	.aaa {
		width: 84%;
		height: 100%;
		// background-color: blue;
		margin-left: 8%;
	}

	.logowx-top {
		width: 100%;
		height: 100rpx;
		display: flex;
		justify-content: center;
	}

	.logowx {
		width: 100rpx;
		height: 100rpx;
		// background-color: #00ffff;

	}

	.logowx image {
		width: 100%;
		height: 100%;
	}

	.login-title {
		height: 60rpx;
		margin: 0 auto;
		display: flex;
		justify-content: center;
		color: #A9A5A0;
		margin-top: 40rpx;
		font-size: 30rpx;
	}

	.tp {
		width: 40rpx;
		height: 40rpx;
	}

	.ttpp {
		margin-top: 30rpx;
		margin-left: 30rpx;
	}

	.tp image {
		width: 100%;
		height: 100%;
		font-size: 24rpx;
	}
</style>
