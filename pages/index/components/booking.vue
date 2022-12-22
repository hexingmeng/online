<template>
	<view class="">
		<view class="cooktop">
			拼团
		</view>
		<view class="cookcon">
			<view class="concon" v-for="(item,index) in add" :key="index" @click="babra(item)">
				<image :src="item.cover" mode=""></image>
				<p>{{item.title}}</p>
				<view class="mianfei">
					<p>￥{{item.price}}</p>
					<p style="font-size: 12px;color: #a9a5a0;margin-top: 6px;">￥{{item.t_price}}</p>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import home from "@/api/home.js"
	export default {
		props:['add'],
		data() {
			return {}
		},
		methods: {
			babra(item){
				console.log(item);
				uni.navigateTo({
					url: `/pages/course/course?id=${item.id}`
				})
			}
		}
	}
</script>

<style>
	.cooktop {
		width: 94%;
		height: 100rpx;
		margin-left: 3%;
		/* background-color: #ffff00; */
		font-size: 34rpx;
		font-weight: 900;
		line-height: 100rpx;
	}

	.cookcon {
		width: 100%;
		height: 310rpx;
		/* background-color: #aaffff; */
		overflow: scroll;
		display: flex;
	}

	.cookcon image {
		width: 170px;
		height: 90px;
	}

	.concon {
		padding: 10px;
		width: 170px;
		height: 130px;
		font-size: 17px;
	}

	.concon p {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.mianfei p{
		float: left;
		font-size: 17px;
		color: red;
	}
</style>
