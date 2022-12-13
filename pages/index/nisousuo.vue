<template>
	<view class="">
		<Usou></Usou>
		<mescrollswiper :search="search"></mescrollswiper>
	</view>
</template>

<script>
	import Usou from "@/pages/index/sousuo/Usou.vue"
	import mescrollswiper from "@/pages/index/sousuo/mescroll-swiper.vue"
	export default{
		data(){
			return{
				search:""
			}
		},
		components:{
			Usou,
			mescrollswiper
		},
		onLoad(okss) {
			this.search = okss.keyword
			// console.log(okss);
		},
		methods:{
			
		}
	}
</script>

<style>

</style>