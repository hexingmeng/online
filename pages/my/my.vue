<template>
	<view class="md">
		<view class="mytop">
			<view class="mytopin" @click="tiaotele">
				<mytop :Mytop="Mytop"></mytop>
			</view>
			<view class="mycon">
				<mycon></mycon>
			</view>
		</view>
		<view class="mybtn">
			<mybtn></mybtn>
		</view>
	</view>
</template>

<script>
	import mytop from "../my/components/mytop.vue"
	import mycon from "../my/components/mycon.vue"
	import mybtn from "../my/components/mybtn.vue"
	export default {
		data() {
			return {
				Mylist: {},
				Mytop: {}
			};
		},
		components: {
			mytop,
			mycon,
			mybtn
		},
		onLoad() {
			try {
				const value = uni.getStorageSync("userinfo");
				// console.log(value);
				if (value.username) {
					this.Mytop = value
				}
				console.log(this.Mytop);
			} catch (e) {
				//错误
				console.log(e);
			}
		},
		onNavigationBarButtonTap() {
			uni.navigateTo({
				url:"/pages/my-coupon/my-coupon"
			})
		},
		methods: {
			tiaotele() {
				const asd=uni.getStorageSync("userinfo");
				console.log("asd",asd);
				if (!asd.username) {
					uni.navigateTo({
						url: "/pages/login/login"
					})
				} else if(asd.phone){
					uni.navigateTo({
						url: "/pages/datum/datum"
					})
				}
				else {
					uni.navigateTo({
						url: "/pages/tele/tele"
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	.md {
		width: 100%;
		height: 100%;

		background-color: #fff;
		// overflow-x: hidden;
	}

	.mytop {
		width: 100%;
		height: 335rpx;
		
		background-color: #fff;
		position: relative;
	}

	.mytopin {
		width: 100%;
		height: 360rpx;
		background-color: #5bc97f;
		border-bottom-left-radius: 120rpx;
		border-bottom-right-radius: 100rpx;
	}

	.mycon {
		width: 100%;
		height: 110rpx;
		position: absolute;
		bottom: 10rpx;
		left: 5%;
		border-radius: 10rpx;
	}

	.mybtn {
		width: 100%;
		height: 100%;
		background-color: #fff;
		margin-top: 30rpx;
	}
</style>
