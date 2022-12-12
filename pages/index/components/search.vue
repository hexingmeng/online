<template>
	<view class="">
		<view class="topcon" @click="sousuo">
			<text class="iconfont icon-search"></text>
			请输入搜索关键词
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		methods:{
			sousuo(){
				uni.navigateTo({
					url: "/pages/index/sousuo/sousuo"
				})
			}
		}
	}
</script>

<style>
	.topcon {
		width: 94%;
		height: 84rpx;
		margin-left: 3%;
		margin-top: 20rpx;
		background-color: #f5f5f1;
		border-radius: 8rpx;
		text-align: center;
		line-height: 84rpx;
	}
</style>