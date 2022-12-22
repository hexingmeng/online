<template>
	<view class="topify">
		<view class="cify" v-for="(item,index) in ify" :key="item.id">
			<view class="sss" @click="skip(item)">
				<image :src="item.src" mode=""></image><br>
				<span>{{item.name}}</span>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['ify'],
		data() {
			return {

			}
		},
		methods: {
			skip(item) {
				console.log(item);
				if (item.url) {
					uni.navigateTo({
						url: `/pages/problem/slide/slide?url=${item.url}`
					})
					return
				}
				switch (item.module) {
					case "test":
						uni.navigateTo({
							url: `/pages/problem/test/test?module=${item.module}`
						})
						break;
					case "flashsale":
						uni.navigateTo({
							url: `/pages/problem/flashsale/flashsale?module=${item.module}`
						})
						break;
					case "group":
						uni.navigateTo({
							url: `/pages/problem/group/group?module=${item.module}`
						})
						break;
					case "live":
						uni.navigateTo({
							url: `/pages/problem/live/live?module=${item.module}`
						})
						break;
					case "column":
						uni.navigateTo({
							url: `/pages/problem/column/column?module=${item.module}`
						})
						break;
					case "book":
						uni.navigateTo({
							url: `/pages/problem/book/book?module=${item.module}`
						})
						break;
					case "bbs":
						uni.navigateTo({
							url: `/pages/problem/bbs/bbs?url=${item.module}`
						})
						break;
					default:
						console.log('没有匹配上');
						break;
				}
			}
		}
	}
</script>

<style>
	.topify {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	}

	.cify {
		width: 25%;
		height: 134rpx;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #6c757D;
		font-size: 24rpx;
	}

	.cify image {
		width: 70rpx;
		height: 72rpx;
	}
</style>
