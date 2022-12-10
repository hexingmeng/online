<template>
	<view class="topify">
		<view class="cify" v-for="(item,index) in ify" :key="item.id">
			<view class="sss">
				<image :src="item.src" mode=""></image><br>
				<span>{{item.name}}</span>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['ify'],
		data() {
			return {
				
			}
		},
		
	}
</script>

<style>
	.topify{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	}
	.cify{
		width: 25%;
		height: 134rpx;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #6c757D;
		font-size: 24rpx;
	}
	.cify image{
		width: 70rpx;
		height: 72rpx;
	}
</style>