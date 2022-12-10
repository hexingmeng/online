<template>
	<view>
		<view class="login-box">
			<view class="tp" @click="fanmy">
				<image class="ttpp" src="../../static/xiangzuo.png" mode=""></image>
			</view>
		</view>
		<view class="login-white">
			<view class="aaa">
				<text class="login-font">绑定手机号</text>
				<view class="login-info info-input">
					<text class="iconfont icon-icon-test"></text>
					<input class="info-user" type="text" placeholder="请输入手机号" v-model="form.phone">
				</view>
				<view class="login-info info-input">
					<text class="iconfont icon-mima"></text>
					<input class="info-user" placeholder="验证码" v-model="form.code">
					<view class="yinrubtn">
						<view class="code-btn" @click="fasong">
							发送
						</view>
					</view>
				</view>
				<view class="login-denglu" @click="binding">绑定</view>
			</view>
		</view>
	</view>
</template>

<script>
	import appid from "@/api/appid.js"
	export default {
		data() {
			return {
				form: {
					phone: "",
					code: ""
				}
			}
		},
		// onUnload：监听页面的卸载
		onUnload() {
			uni.switchTab({
				url: '@/pages/login/login'
			})
		},
		methods: {
			fanmy() {
				uni.switchTab({
					url: "/pages/my/my"
				})
			},
			async fasong() {
				if (!this.form.phone) {
					uni.showToast({
						title: '手机号不能为空',
						icon: 'none',
						duration: 2000
					});
				} else {
					const add = await appid.captcha(this.form)
					console.log("add=>", add)
					console.log(this.form);
					uni.showToast({
						title: `${add}`,
						icon: 'none',
						duration: 2000
					});
				}
			},
			async binding() {
				if (!this.form) {
					uni.showToast({
						title: '不能为空',
						icon: 'none',
						duration: 2000
					});
				} else {
					const pdd = await appid.bind(this.form)
					// uni.setStorageSync("userinfo")
					console.log("pdd=>", pdd)
					if (pdd == "ok") {
						var sde = uni.getStorageSync("userinfo",sde)
						sde.phone = this.form.phone
						uni.setStorageSync("userinfo", sde)
						uni.switchTab({
							url: "/pages/my/my"
						})
					}

				}

			}
		},
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

	.login-white {
		width: 100%;
		height: 85%;
		background-color: #fff;
		position: absolute;
		bottom: 0;
		// padding: 0 45rpx;
		box-sizing: border-box;
		border-radius: 30rpx;
	}

	.aaa {
		width: 84%;
		height: 100%;
		// background-color: blue;
		margin-left: 8%;
	}

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
		position: relative;

		.info-user {
			margin-left: 25rpx;

		}
	}

	.yinrubtn {
		position: absolute;
		right: 0;
		border-top-right-radius: 8rpx;
		border-bottom-right-radius: 8rpx;
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

	.code-btn {
		border-top-right-radius: 8rpx;
		border-bottom-right-radius: 8rpx;
		width: 200rpx;
		height: 100rpx;
		background-color: #5ccc84;
		font-size: 28rpx;
		color: #fff;
		line-height: 100rpx;
		text-align: center;
	}
</style>
