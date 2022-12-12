<template>
	<view>
		<view class="dacon">
			<view class="datopleft">
				原密码
			</view>
			<view class="">
				<input class="uni-input-input" placeholder="请输入原密码" v-model="form.opassword">
			</view>
		</view>
		<view class="dacon">
			<view class="datopleft">
				新密码
			</view>
			<view class="">
				<input class="uni-input-input" placeholder="请输入新密码" v-model="form.password">
			</view>
		</view>
		<view class="dacon">
			<view class="datopleft">
				确认密码
			</view>
			<view class="">
				<input class="uni-input-input" placeholder="请输入确认密码" v-model="form.repassword">
			</view>
		</view>
		<view class="login-denglu" @click="tijiao">提交</view>
	</view>
</template>

<script>
	import appid from "@/api/appid.js"
	export default {
		data() {
			return {
				form:{
					opassword:"",
					password:"",
					repassword:""
				}
			};
		},
		methods:{
			async tijiao(){
				try{
					uni.showLoading({
						title:"修改密码中",
						mask:false
					})
					const res = await appid.pass(this.form)
					console.log("Res=>", res)
					uni.hideLoading()
					uni.switchTab({
						url: "/pages/login/login"
					})
				}catch(e){
					uni.hideLoading()
					console.log(e);
				}
			}
		}
	}
</script>

<style lang="scss">
	.dacon {
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 26rpx 30rpx;
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
