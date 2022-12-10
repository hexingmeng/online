<template>
	<view class="pricetop">
		<view class="top" @click="draw" v-for="(item,index) in sale" :key="index" scroll-x scroll-left>
			<view>
				<view class="lefttop">
					{{item.price}}
				</view>
				<view class="leftbtn">
					{{item.value.title}}
				</view>
			</view>
			<view class="right">
				领取
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['sale'],
		data() {
			return {
				type:""
			}
		},
		methods:{
			draw() {
				this.type = this.type == 'true' ? 'false' : 'true'
			},
		}
	}
</script>

<style>
	.pricetop{
		width: 100%;
		height: 116rpx;
		background-color: #00ffff;
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
		margin-top: 10px;
	}
	.right{
		width: 120rpx;
		height: 116rpx;
		background-color: #ffc107;
		border-left: 2rpx #fff dashed;
		text-align: center;
		color: #fff;
		line-height: 116rpx;
	}
	.lefttop{
		font-size: 17px;
	}
	.leftbtn{
		font-size: 12px;
	}
</style>