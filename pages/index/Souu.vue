<template>
	<view class="index-top">
		<view class="jiantou" @click="fanhui">
			<image src="../../static/xiangzuo.png" mode=""></image>
		</view>
		<view class="topcon">
			<text class="iconfont icon-search"></text>
			<input class="uni-input-input" placeholder="输入搜索关键字" v-model="input">
			<view class="shanchu" v-if="input">
				X
			</view>

		</view>
		<view class="sous" @click="sea">
			搜索
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				input: "",
				search: ""
			}
		},
		methods: {
			sea() {
				uni.navigateTo({
					url: `/pages/index/nisousuo?keyword=${this.input}`
				})
			},
			fanhui() {
				uni.switchTab({
					url: '/pages/index/index'
				})
			}
		}
	}
</script>

<style>
	.index-top {
		width: 100%;
		height: 88rpx;
		/* background-color: #ffff00; */
		display: flex;
	}

	.jiantou {
		width: 80rpx;
		height: 88rpx;
		background-color: #fff;
	}

	.jiantou image {
		width: 50%;
		height: 50%;
		margin-left: 20rpx;
		margin-top: 20rpx;
	}

	.topcon {
		width: 600rpx;
		height: 60rpx;
		background-color: #f6f9fb;
		display: flex;
		border-radius: 100rpx;
		margin-top: 14rpx;
	}

	.iconfont {
		font-size: 40rpx;
		margin-left: 20rpx;
		margin-top: 10rpx;
	}

	.shanchu {
		width: 35rpx;
		height: 30rpx;
		font-size: 24rpx;
		color: #fff;
		background-color: #ccc;
		border-radius: 50%;
		text-align: center;
		line-height: 30rpx;
		margin-right: 20rpx;
		margin-top: 15rpx;
	}

	.sous {
		margin-top: 20rpx;
		/* background-color: #ffaa7f; */
	}
</style>
