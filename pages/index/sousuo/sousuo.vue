<template>
	<view>
		<view class="login-box">
			<view class="tp">
				<image class="ttpp" src="@/static/xiangzuo.png" mode=""></image>
			</view>
			<view class="cons">
				<text class="iconfont icon-search icon"></text>
				<view class="">
					<input class="uni-input-input" placeholder="请输入搜索关键词">
				</view>
			</view>
			<view class="below">
				搜索
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.login-box {
		width: 100vw;
		height: 88rpx;
		// background: bisque;
		width: 100%;
		position: relative;
		display: flex;
	}

	.tp {
		width: 88rpx;
		height: 88rpx;
		background-color: #fff;
	}

	.ttpp {
		margin-top: 22rpx;
		margin-left: 22rpx;
	}

	.tp image {
		width: 50%;
		height: 50%;
		font-size: 24rpx;
	}
	.cons{
		width: 580rpx;
		height: 60rpx;
		background-color: #f6f9fb;
		border-radius: 100rpx;
		margin-top: 16rpx;
		// padding-top: 10rpx;
		display: flex;
	}
	.icon{
		font-size: 40rpx;
		margin-left: 20rpx;
		padding-top: 10rpx;
		margin-right: 10rpx;
		// margin-top: 20rpx;
	}
	.below{
		width: 80rpx;
		height: 88rpx;
		text-align: center;
		line-height: 88rpx;
	}
</style>
