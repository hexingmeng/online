<template>
	<view class="top">
		<view class="aaa">
			<view class="mytopimage">{{Mytop.image}}</view>
		</view>
		<view v-if="!Mytop.username" class="message" @click="NavLogin">
			<view class="name">立即登录</view>
			<view class="describe">登录解锁功能</view>
		</view>
		<view v-else @click="Navedit" class="message">
			<view class="name">{{Mytop.username}}</view>
			<view class="describe">{{Mytop.desc}}</view>
		</view>
		<view class="icon iconfont icon-add" v-if="Mytop.username"></view>
	</view>
</template>

<script>
	export default {
		props: {
			Mytop: {
				type: Object,
				default: () => ({
					username: "11",
					describe: ""
				}),
			},
		},
		methods: {
			NavLogin() {
				uni.navigateTo({
					url: '/pages/login/login',
				})
			},
			Navedit() {
				// uni.navigateTo({
				// 	url: '/pages/edit/edit',
				// })
				console.log(this.Mytop);
			},
			
		},
	}
</script>

<style>
	.top {
		width: 100%;
		height: 120rpx;
		/* background-color: #aaffff; */
		display: flex;
		position: relative;
		color: #fff;
		padding-top: 50rpx;
		/* padding: 2rpx;  */
	}

	.mytopimage {
		width: 120rpx;
		height: 120rpx;
		background-color: #fff;
		border-radius: 50%;
		margin-left: 36rpx;
		margin-right: 44rpx;
	}

	.mytopimage image {
		width: 100%;
		height: 100%;
	}

	.listtop,
	.name {
		width: 100%;
		/* margin-top: 20rpx; */
		/* margin-bottom: 10rpx; */
		margin-bottom: 20rpx;
		font-size: 36rpx;
		
	}

	.righttop {
		width: 100%;
		font-size: 24rpx;
	}

	.icon {
		position: absolute;
		right: 20rpx;
		top: 100rpx;
	}

	.describe {
		font-size: 24rpx;
	}
</style>
