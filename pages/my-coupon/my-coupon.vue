<template>
	<view>
		<view class="dacon" @click="number">
			<view class="datopleft">
				账户安全
			</view>
			<view class="">
				>
			</view>
		</view>
		<view class="dacon" @click="clear">
			<view class="datopleft">
				清除缓存
			</view>
			<view class="">
				2.00KB
			</view>
		</view>
		<view class="datop">
			<view class="datopleft">
				检查更新
			</view>
			<view class="">
				>
			</view>
		</view>
		<view class="datop">
			<view class="datopleft">
				当前版本
			</view>
			<view>
				1.0.0
			</view>
		</view>
		<view class="login-denglu" @click="quit">退出登录</view>
	</view>
</template>

<script>
	import appid from "@/api/appid.js"
	export default {
		data() {
			return {

			};
		},
		methods: {
			clear() {
				uni.showModal({
					content: '是否要清理缓存？',
					success: function(res) {
						if (res.confirm) {
							// 执行确认后的操作
						} else {
							// 执行取消后的操作
						}
					}
				})
			},
			number() {
				uni.navigateTo({
					url: "/pages/number/number"
				})
			},
			async quit() {
				const out = await appid.logout()
				console.log("out=>", out);
				uni.showModal({
					content: '是否退出登录？',
					success: function(res) {
						if (res.confirm) {
							uni.switchTab({
								url: "/pages/my/my"
							})
							uni.removeStorageSync("userinfo")
						} else {
							// 执行取消后的操作
						}
					}
				})
				
			}
		}
	}
</script>

<style lang="scss">
	.datop,
	.dacon,
	.dabtn {
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 24rpx 30rpx;
		padding-left: 30rpx;
		flex: 1;
		overflow: hidden;
		// background-color: #aaffff;
		font-size: 28rpx;
	}

	.datopright {
		width: 80rpx;
		height: 80rpx;
		background-color: #fff;
		border-radius: 50%;
	}

	.datopright image {
		width: 100%;
		height: 100%;
	}

	.dacon {
		// height: ;
		// background-color: #ffff00;
	}

	.login-denglu {
		width: 92%;
		height: 100rpx;
		line-height: 80rpx;
		background: #5ccc84;
		color: #ffffff;
		border-radius: 8rpx;
		text-align: center;
		line-height: 100rpx;
		margin-left: 4%;
		margin-top: 20rpx;
	}
</style>
