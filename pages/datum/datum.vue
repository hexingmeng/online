<template>
	<view>
		<view class="datop">
			<view class="datopleft">
				头像
			</view>
			<view class="datopright">
				<image src="../../static/c1.png" mode=""></image>
			</view>
		</view>
		<view class="dacon">
			<view class="datopleft">
				昵称
			</view>
			<view class="">
				<input class="uni-input-input" placeholder="未填写">
			</view>
		</view>
		<view class="datop">
			<view class="datopleft">
				性别
			</view>
			<view class="">
				未知
			</view>
		</view>
		<view class="datop">
			<view class="datopleft">
				手机
			</view>
			<view v-for="(item,index) in form" :key="index">
				{{item.phone}}
			</view>
		</view>
		<view class="login-denglu">提交</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					response: uni.getStorageSync("userinfo")
				}
			};
		},
		methods: {}
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

	.uni-input-input {
		text-align: right;
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
