<template>
	<view class="">
		<view class="login-info info-input">
			<text class="iconfont icon-icon-test"></text>
			<input class="info-user" type="text" placeholder="请输入用户名">
		</view>
		<view class="login-info info-input">
			<text class="iconfont icon-mima"></text>
			<input class="info-user" placeholder="请输入密码">
		</view>
		<view class="login-info info-input" v-if="type == 'reg'">
			<text class="iconfont icon-mima"></text>
			<input class="info-user" type="text" placeholder="请输入确认密码" />
		</view>
	</view>
</template>

<script>
	
</script>

<style>
	.login-font {
		display: inline-block;
		font-size: 42rpx;
		font-weight: 500;
		margin-top: 60rpx;
		margin-bottom: 40rpx;
	}
	.info-input {
		width: 100%;
		height: 50px;
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
</style>