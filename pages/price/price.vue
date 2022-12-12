<template>
	<view>
		<view class="pricetop" v-for="(item,index) in sale" :key="index">
			<view class="top">
				<view>
					<view class="lefttop">
						￥{{item.price}}
					</view>
					<view class="righttop">
						{{item.title}}
					</view>
				</view>
			</view>
			<view class="btnprc">
				立即使用
			</view>
		</view>
	</view>
</template>

<script>
	import home from "@/api/home.js"
	export default {
		data() {
			return {
				form:{
					page:1,
					limit:10
				},
				sale:""
			};
		},
		onLoad() {
			this.prsale();
		},
		methods:{
			async prsale(){
				const a = await home.coupon(this.form)
				this.sale=a.rows
				console.log("this.home=>", this.sale)
			},
		}
	}
</script>

<style lang="scss">
.pricetop{
	width: 92%;
	margin-left: 4%;
	height: 124rpx;
	display: flex;
	margin-bottom: 30rpx;
}
.top{
	color: #fff;
	padding: 20rpx;
	width: 490rpx;
	background-color: #D39E00;
}
.lefttop{
	font-size: 40rpx;
	width: 490rpx;
}
.righttop{
	font-size: 24rpx;
}
.btnprc{
		width: 200rpx;
		height: 124rpx;
		background-color: #ffc107;
		border-left: 4rpx #fff dashed;
		text-align: center;
		color: #fff;
		line-height: 116rpx;
}
</style>
