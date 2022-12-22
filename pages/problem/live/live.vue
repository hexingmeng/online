<template>
	<view>
		<view class="top">
			<view class="saletop" v-for="(item,index) in sale" :key="index">
				<view class="topimg">
					<image :src="item.cover" mode=""></image>
				</view>
				<view class="salecon">
					<p>{{item.title}}</p>
					<p style="color:#dc3545;font-size: 24rpx;margin-top: 10rpx 0rpx;">直播中</p>
					<view class="cons">
						<p>￥{{item.price}}</p>
						<p style="color:#a9a5a0;font-size: 24rpx;margin-top: 10rpx;">￥{{item.t_price}}</p>
					</view>
				</view>
			</view>
			<view class="btn">
				没有更多数据了
			</view>
		</view>
	</view>
</template>

<script>
	import vivo from "@/api/vivo.js"
	export default {
		data() {
			return {
				even:{
					page: 1,
					limit: 10
				},
				sale:""
			};
		},
		onLoad() {
			this.live()
		},
		methods:{
			async live(){
				const aucn = await vivo.vivolive(this.even)
				this.sale = aucn.rows
				console.log("a",this.sale);
			}
			
			
		}
	}
</script>

<style lang="scss">
	.top{
		display: flex;
		justify-content: space-between;	
		flex-wrap: wrap;
	}
.saletop{
	width: 360rpx;
	height: 320rpx;
	margin-left: 10rpx;
	// background-color: #aaffff;
}
.topimg{
	width: 340rpx;
	height: 180rpx;
}
.topimg image{
	width: 100%;
	height: 100%;
}
.salecon{
	width: 340rpx;
	height: 180rpx;
	overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
}
.cons{
	display: flex;
	color: #dc3545;
	font-size: 34rpx;
}
.btn{
	width: 100%;
	height: 80rpx;
	text-align: center;
	line-height: 80rpx;
}
</style>
