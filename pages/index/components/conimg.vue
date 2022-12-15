<template>
	<view class="conimg">
		<view>
			<image :src="mone.data" mode=""></image>
		</view>
	</view>
</template>

<script>
	import home from "@/api/home.js"
	export default {
		props:['mone'],
		data() {
			return {}
		},
		methods: {
			
		}
	}
</script>

<style>
	.conimg{
		width: 100%;
		/* background-color: #ffff00; */
	}
	.conimg image{
		width: 100%;
		height: 360rpx;
	}
</style>
