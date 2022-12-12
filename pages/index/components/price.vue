<template>
	<view class="pricetop">
		<view class="top" v-for="(item,index) in sale" :key="index" scroll-x scroll-left>
			<view :class="item.isgetcoupon===false ? 'left' : 'leftaaa'">
				<view class="lefttop">
					{{item.price}}
				</view>
				<view class="leftbtn">
					{{item.value.title}}
				</view>
			</view>
			<view :class="item.isgetcoupon===false ? 'right' : 'rightaaa'" @click="lingqu(item)">
				{{item.isgetcoupon ?  '已领取' : '领取'}}
			</view>
		</view>
	</view>
</template>

<script>
	import home from "@/api/home.js"
	export default {
		props:['sale'],
		data() {  
			return {
				
			}
		},
		
		methods:{
			async lingqu(item) {
				const asd=uni.getStorageSync("userinfo");
				// console.log("asd",asd);
				if (!asd.username) {
					uni.navigateTo({
						url: "/pages/login/login"
					})
				} else if(!asd.phone){
					uni.navigateTo({
						url: "/pages/tele/tele"
					})
					return
				}
				const data={
					coupon_id:item.id
				}
				const response = await home.receive(data)
				this.$emit('getNum')
			},
		}
	}
</script>

<style>
	.pricetop{
		width: 100%;
		height: 116rpx;
		/* background-color: #00ffff; */
		/* overflow-y: scroll; */
		display: flex; 
		overflow: scroll;
	}
	.top{
		width: 580rpx;
		height: 100%;
		background-color: #D39E00;
		/* margin-left: 40rpx; */
		margin-right: 20rpx;
		display: flex;
	}
	.left{
		width: 460rpx;
		text-align: center;
		color: #fff;
		padding-top: 20rpx;
	}
	.leftaaa{
		width: 460rpx;
		text-align: center;
		color: #fff;
		padding-top: 20rpx;
		background-color: #DAE0E5;
	}
	.right{
		width: 120rpx;
		height: 116rpx;
		background-color: #ffc107;
		border-left: 4rpx #fff dashed;
		text-align: center;
		color: #fff;
		line-height: 116rpx;
	}
	.rightaaa{
		width: 120rpx;
		height: 116rpx;
		background-color: #DAE0E5;
		border-left: 4rpx #fff dashed;
		text-align: center;
		color: #fff;
		line-height: 116rpx;
	}
	.lefttop{
		font-size: 34rpx;
	}
	.leftbtn{
		font-size: 24rpx;
	}
</style>