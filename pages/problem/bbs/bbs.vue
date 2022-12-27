<template>
	<view>
		<view class="index-top">
			<view class="jiantou" @click="fanhui">
				<image src="@/static/xiangzuo.png" mode=""></image>
			</view>
			<view class="topcon">
				<text class="iconfont icon-search"></text>
				<input class="uni-input-input" placeholder="输入搜索关键字" v-model="input">
				<view class="shanchu" v-if="input">
					X
				</view>

			</view>
			<view class="sous" @click="sea">
				+
			</view>
		</view>
		<view class="conbbs">
			<scroll-view scroll-x="true">
				<view v-for="(item,index) in adda" :key="index" class="aaa"><button>{{item.title}}</button></view>
			</scroll-view>
		</view>
		<view class="henggang"></view>
		<view class="invitation">
			<view class="inleft">
				总帖子：318
			</view>
			<view class="inright">
				总用户：2
			</view>
		</view>
		<view class="post" v-for="(item,index) in head" :key="index">
			<view class="henggang"></view>
			<view class="ptop">
				<view class="posttop">
					<image :src="item.user.avatar" mode=""></image>
				</view>
				<view class="pcon">
					{{item.user.name}}
					{{item.user.sex}}
				</view>
			</view>
			<view class="consex">
				<view class="">
					{{item.desc.text}}
				</view>
				<view class="">
					<image :src="item.desc.images[0]" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import vivo from "@/api/vivo.js"
	export default {
		data() {
			return {
				input: "",
				search: "",
				even: {
					page: 1
				},
				ones: {
					page: 1,
					keyword: "",
					bbs_id: 0
				},
				across: "",
				head:"",
				adda:[]
			}
		},
		onLoad() {
			this.onbbs()
			this.ondet()
		},
		methods: {
			fanhui() {
				uni.switchTab({
					url: '/pages/index/index'
				})
			},
			async onbbs() {
				const aucn = await vivo.vivobbss(this.even)
				this.across = aucn.rows
				// console.log("a", this.across);
				let array = this.across;
				array.forEach((item, index)=> {
					this.adda.push(item)
				});
			},
			async ondet(){
				const deta=await vivo.vivobbsdet(this.ones)
				this.head = deta.rows
				console.log(this.head);
			}
			// onReachBottom() {
			// 	// 让页码值自增+1
			// 	this.even.page++
			// 	this.onbbs()
			// },
		}
	}
</script>

<style lang="scss">
	.index-top {
		width: 100%;
		height: 88rpx;
		/* background-color: #ffff00; */
		display: flex;
	}

	.jiantou {
		width: 80rpx;
		height: 88rpx;
		background-color: #fff;
	}

	.jiantou image {
		width: 50%;
		height: 50%;
		margin-left: 20rpx;
		margin-top: 20rpx;
	}

	.topcon {
		width: 600rpx;
		height: 60rpx;
		background-color: #f6f9fb;
		display: flex;
		// border-radius: 100rpx;
		margin-top: 14rpx;
	}

	.iconfont {
		font-size: 40rpx;
		margin-left: 20rpx;
		margin-top: 10rpx;
	}

	.shanchu {
		width: 35rpx;
		height: 30rpx;
		font-size: 24rpx;
		color: #fff;
		background-color: #ccc;
		border-radius: 50%;
		text-align: center;
		line-height: 30rpx;
		margin-right: 20rpx;
		margin-top: 15rpx;
	}

	.sous {
		width: 40rpx;
		height: 40rpx;
		border-radius: 50%;
		// background-color: #55ff00;
		margin-top: 20rpx;
		margin-left: 20rpx;
		border: 2rpx solid black;
		text-align: center;
		line-height: 40rpx;
	}
	.conbbs{
		width: 100%;
		height: 84rpx;
		white-space: nowrap;
		// background-color: #aaffff;
	}
	.scroll-view_H{
	}
	.aaa{
		// width: 100%;
		// width: 126rpx;
		height: 84rpx;
		display: inline-flex;
	}
	.aaa button{
		height: 64rpx;
		font-size: 32rpx;
		margin: 0 10rpx 20rpx;
		text-align: center;
		background-color: #F8F9fa;
		// background-color: #5ccc84;
		color: #6c757d;
	}
	.henggang{
		width: 100%;
		height: 14rpx;
		background-color: #f5f5f3;
	}
	.invitation{
		width: 100%;
		height: 84rpx;
		background-color: #fff;
		font-size: 34rpx;
		display: flex;
		text-align: center;
		line-height: 84rpx;
		color: #6c757d;
	}
	.inleft{
		width: 50%;
		height: 84rpx;
	}
	.inright{
		width: 50%;
		height: 84rpx;
	}
	.post{
		width: 100%;
		// height: 294rpx;
		background-color: #ffff7f;
	}
	.ptop{
		width: 94%;
		background-color: #fff;
		margin-left: 3%;
		display: flex;
	}
	.pcon{
		width: 100rpx;
	}
	.posttop{
		width: 74rpx;
		height: 74rpx;
		background-color: #fff;
		border-radius: 50%;
	}
	.posttop image{
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	.consex image{
		width: 110px;
		height: 110px;
	}
</style>
