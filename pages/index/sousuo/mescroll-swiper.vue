<template>
	<view>
		<!-- 当设置tab-width,指定每个tab宽度时,则不使用flex布局,改用水平滑动 -->
		<view class="index-con">
			<metabs v-model="tabIndex" :tabs="tabs" :height="90"></metabs>
			<swiper :style="{height: height}" :current="tabIndex" @change="swiperChange">
				<swiper-item v-for="(tab,i) in tabs" :key="i">
					<MescrollItem :search="search" ref="mescrollItem" :i="i" :index="tabIndex" :tabs="tabs">
					</MescrollItem>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import MescrollItem from "@/pages/index/sousuo/MescrollItem.vue";
	import metabs from "@/uni_modules/me-tabs/me-tabs.vue"
	export default {
		props: {
			search: {
				type: String,
				default: ''
			},
		},
		components: {
			MescrollItem,
			metabs
		},
		data() {
			return {
				height: "800rpx", // 需要固定swiper的高度
				tabs: [{
					name: '课程'
				}, {
					name: '专栏'
				}],
				tabIndex: 0 // 当前tab的下标
			}
		},
		methods: {
			// 轮播菜单
			swiperChange(e) {
				this.tabIndex = e.detail.current
			},
			// 获取指定下标的mescroll对象
			// getMescroll(i){
			// 	let mescrollItems = this.$refs.mescrollItem;
			// 	if(mescrollItems){
			// 		let item = mescrollItems[i]
			// 		if(item) return item.mescroll
			// 	}
			// 	return null
			// }
		},
		onLoad() {
			// 需要固定swiper的高度
			this.height = uni.getSystemInfoSync().windowHeight + 'px'
		},
		onShow() {
			// 返回刷新: https://www.mescroll.com/uni.html#note 第二点
			// if(this.canReset){
			// 	let curMescroll = this.getMescroll(this.tabIndex)
			// 	curMescroll && curMescroll.resetUpScroll()
			// }
			// this.canReset = true
		}
	}
</script>

<style>
</style>
