<template>
	<view class="">
		<view class="cooktop">
			最新列表
		</view>
		<view class="cookcon">
			<view class="concon" v-for="(item,index) in love" :key="index">
				<image :src="item.cover" mode=""></image>
				<view class="con">
					{{item.type == 'video' ? '视频' : (item.type == 'audio' ? '音频' : '图文')}} 
				</view>
				<view class="ccc">
					<view class="fzcon">{{item.title}}</view>
					<view class="mianfei">
						<p>￥{{item.price}}</p>
						<p style="font-size: 24rpx;color: #a9a5a0;margin-top: 12rpx;">￥{{item.t_price}}</p>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import home from "@/api/home.js"
	export default {
		props:['love'],
		data() {
			return {}
		},
		methods: {
			
		}
	}
</script>

<style>
	.cookcon{
		overflow-x: hidden;
	}
	.cooktop {
		width: 94%;
		height: 100rpx;
		margin-left: 3%;
		/* background-color: #ffff00; */
		font-size: 34rpx;
		font-weight: 900;
		line-height: 100rpx;
	}
	.concon{
		width: 100%;
		height: 180rpx;
		padding: 20rpx;
		display: flex;
		position: relative;
	}
	.concon image{
		width: 300rpx;
		height: 100%;
	}
	.con{
		    position: absolute;
		    left: 240rpx;
		    top: 160rpx;
		    background-color: rgba(0,0,0,.4);
		    padding: 0 10rpx;
			font-size: 24rpx;
			color: #fff;
	}
	.ccc{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding-left: 20rpx;
	}
	.fzcon {
		width: 400rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.mianfei{
		/* margin-top: 20rpx; */
	}
	.mianfei p{
		float: left;
		font-size: 34rpx;
		color: red;
	}
</style>
