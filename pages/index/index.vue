<template>
	<view class="">
		<view class="indextop">
			<search></search>
		</view>
		<view class="sss">
			<slideshow :home="home"></slideshow>
		</view>
		<view class="indexify">
			<classify :ify="ify"></classify>
		</view>
		<view class="csale">
			<price :sale="sale" @getNum="getNum"></price>
		</view>
		<view class="henggang">
			
		</view>
		<view class="cook">
			<booking :add="add"></booking>
		</view>
		<view class="heng">
		</view>
		<view class="">
			<list :love="love"></list>
		</view>
		<view class="">
			<conimg :mone="mone"></conimg>
		</view>
	</view>
</template>

<script>
	import home from "@/api/home.js"
	import search from "@/pages/index/components/search.vue"
	import slideshow from "@/pages/index/components/slideshow.vue"
	import classify from "@/pages/index/components/classify.vue"
	import price from "@/pages/index/components/price.vue"
	import booking from "@/pages/index/components/booking.vue"
	import list from "@/pages/index/components/list.vue"
	import conimg from "@/pages/index/components/conimg.vue"
	export default {
		data() {
			return {
				form: {
				},
				home: "",
				ify:"",
				sale:"",
				add:"",
				love:"",
				mone:"",
				lbt:""
			}
		},
		components: {
			search,
			slideshow,
			classify,
			price,
			booking,
			list,
			conimg
		},
		onLoad() {
			this.getHome();
			this.indexify();
			this.prsale();
			this.book()
		},
		methods: {
			onPullDownRefresh() {
			    console.log('pull down refresh')
			  setTimeout(function () {
			    uni.stopPullDownRefresh();
			  }, 1000);
			},
			onReachBottom(){
			  console.log('上拉')
			  //this.getData();//加载
			},
			async getHome() {
				const a = await home.homeindex(this.form)
				this.home = a[1].data
				this.lbt=a[1].data[1].src
				// console.log("this.home=>", this.home)
				
			},
			async indexify(){
				const a = await home.homeindex(this.form)
				this.ify = a[2].data
				this.love = a[5].data
				this.mone=a[6]
				
				console.log("this.love=>", this.love)
			},
			async prsale(){
				const a = await home.priceindex(this.form)
				this.sale = a
				// console.log("this.home=>", this.sale)
			},
			async getNum(){
				const a = await home.priceindex(this.form)
				this.sale = a
			},
			async book(){
				const usable={
					usable:1
				}
				const a=await home.group(usable)
				this.add=a.rows
				// console.log("a",this.add);
			},
		}
	}
</script>

<style>
	.indextop {
		width: 100%;
		height: 124rpx;
		/* background-color: #aaffff; */
		display: table;
		color: #928e8a;
	}
	.sss {
		width: 96%;
		height: 310rpx;
		margin-left: 2%;
		border-radius: 8rpx;
	}
	.indexify{
		width: 100%;
		height: 280rpx;
		padding: 20rpx 0;
	}
	.csale{
		width: 94%;
		height: 136rpx;
		padding: 10rpx 20rpx 0rpx;
	}
	.henggang{
		width: 100%;
		height: 14rpx;
		background-color: #f5f5f3;
	}
	.heng{
		width: 100%;
		height: 14rpx;
		background-color: #f5f5f3;
		margin-top: 20rpx;
	}
</style>
