<template>
	<view class="box">
		<view class="box-box" v-for="item in SetList" :key="item.id" @click="NavGetTo(item)">
			<view class="iconfont leftright" :class="item.icon"></view>
			<view class="title">{{item.title}}</view>
			<view class="iconfont rightIcon" :class="item.rightIcon">></view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			SetList: {
				type: Array,
				default: () => [{
						id: 1,
						title: '我的优惠卷',
						icon: 'iconfont icon-9 mr-2',
						rightIcon: 'icon-right',
						page: '/pages/my-coupon/my-coupon',
						// isLogin : false
					},
					{
						id: 2,
						title: '常见问题',
						icon: 'iconfont icon-help mr-2',
						rightIcon: 'icon-right',
						page: '/pages/my-coupon/my-coupon',
					},
					{
						id: 3,
						title: '设置',
						icon: 'iconfont icon-leimupinleifenleileibie mr-2',
						rightIcon: 'icon-right',
						page: '/pages/my-coupon/my-coupon',
					},
				],
			},
		},
		methods: {
			NavGetTo(obj) {
				if (obj.title !== '设置' && obj.title !== '常见问题') {
					const login = uni.getStorageSync('login') || ''
					if (login) {
						this.SetList.forEach((item) => {
							if (obj.id == item.id) {
								uni.navigateTo({
									url: item.page,
								})
							}
						})
					} else {
						const asd=uni.getStorageSync("userinfo");
						console.log("asd",asd);
						if (!asd.username) {
							uni.navigateTo({
								url: "/pages/login/login"
							})
						} else if(asd.phone){
							uni.navigateTo({
								url: "/pages/price/price"
							})
						}
						else {
							uni.navigateTo({
								url: "/pages/tele/tele"
							})
						}
					}
				} else {
					uni.navigateTo({
						url: obj.page,
					})
				}
			},
		},
	}
</script>

<style lang="scss">
	.box {
		width: 100%;
		padding: 30rpx 20rpx 0;
		font-size: 14px;

		.box-box {
			width: 94%;
			padding: 3% 0;
			border-top: 1rpx solid #f5f5f5;
			display: flex;

			.leftright {
				width: 7%;
				font-size: 40rpx;
				height: 50rpx;
				line-height: 50rpx;
				color: #4396eb;
				padding-top: 2rpx;
				margin-left: 30rpx;
			}

			.title {
				width: 80%;
				height: 50rpx;
				line-height: 50rpx;
			}

			.rightIcon {
				width: 7%;
				color: #bbbbbb;
				font-size: 14px;
				height: 50rpx;
				line-height: 50rpx;
				color: #bcbcbc;
				padding-top: 2rpx;
			}
		}

		.box-box:nth-child(1) {
			border-top: 0rpx !important;
		}
	}
</style>
