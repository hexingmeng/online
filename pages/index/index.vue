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
	</view>
</template>

<script>
	import home from "@/api/home.js"
	import search from "@/pages/index/components/search.vue"
	import slideshow from "@/pages/index/components/slideshow.vue"
	import classify from "@/pages/index/components/classify.vue"
	import price from "@/pages/index/components/price.vue"
	export default {
		data() {
			return {
				form: {
					
				},
				home: "",
				ify:"",
				sale:""
			}
			
		},
		components: {
			search,
			slideshow,
			classify,
			price
		},
		onLoad() {
			this.getHome();
			this.indexify();
			this.prsale();
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
				// console.log("this.home=>", this.home)
			},
			async indexify(){
				const a = await home.homeindex(this.form)
				this.ify = a[2].data
				// console.log("this.home=>", this.ify)
			},
			async prsale(){
				const a = await home.priceindex(this.form)
				this.sale = a
				console.log("this.home=>", this.sale)
			},
			async getNum(){
				const a = await home.priceindex(this.form)
				this.sale = a
			}
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
		height: 156rpx;
		padding: 10rpx 20rpx;
	}
</style>
