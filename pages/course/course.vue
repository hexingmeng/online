<template>
	<view>
		<view v-if="!detail.isbuy" class="position-relative">
			<image :src="detail.cover || ''" style="width: 100%; height : 420rpx;" class="bg-light"></image>
			<view class="position-absolute text-white font-sm px-2 py-1 rounded" style="bottom:20rpx; right:20rpx; background-color: rgba(0,0,0,0.4);">
				{{detail.type | formatType}}
			</view>
		</view>
		<view class="flex flex-column p-3">
			<text class="mb-1" style="font-size:38rpx;">{{detail.title}}</text>
			<text class="font-sm text-light-muted">{{detail.sub_count}}人学过</text>
			<view v-if="!detail.isbuy" class="flex align-end mt-2">
				<text class="text-danger font-lg">¥{{detail.price}}</text>
				<text class="font-sm text-light-muted ml-1 text-through">¥{{detail.t_price}}</text>
			</view>
		</view>
		<view class="divider"></view>
		<uni-card :title="detail.isbuy ? '课程内容' : '课程简介'" isFull >
			<mp-html :content="detail.isbuy ? detail.content : detail.try" />
		</uni-card>
		<view v-if="!detail.isbuy" class="fixed-bottom p-2 bg-white border-top">
			<view class="bg-main main-btn">立即订购 ¥{{detail.price}}</view>
		</view>
	</view>
</template>

<script>
	import vivo from "@/api/vivo.js"
	export default {
		data() {
			return {
				detail: {
					"id": "",
					"title":"",
					"cover":"",
					"try":"",
					"price":"",
					"t_price":"",
					"type":"",
					"sub_count":0,
					"isbuy":false,
					"isfava":false
				}
			}
		},
		filters : {
			formatType(value){
				const type = {
					media:"图文",
					audio:"音频",
					video:"视频",
					column : '图文'
				}
				return type[value]
			}
		},
		onLoad(e) {
			this.detail.id = e.id
			this.initLoad()
		},
		methods: {
			async initLoad(){
				try{
					const data = {
						id : this.detail.id, 
						column_id: 0,
						group_id: 0,
						flashsale_id: 0,
					}
					const response = await vivo.vivoshop(data)
					console.log("a",response);
					if(response){
						this.detail = response
					}
					uni.setNavigationBarTitle({
						title : this.detail.title
					})
				}catch(e){
				}
			}
		}
	}
</script>

<style lang="scss">
</style>
