<template>
	<view class="lbt">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item class="ddd" v-for="(item,index) in home" :key="item.id">
				<image :src="item.src" mode=""></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		props:['home'],
		data() {
			return {
				form: {
					// response: uni.getStorageSync("userinfo"),
				},
				
			}
		},
		
	}
</script>

<style>
	.ddd {
		width: 100%;
		height: 310rpx;
	}

	.ddd image {
		width: 100%;
		height: 100%;
		border-radius: 8rpx;
	}
</style>
