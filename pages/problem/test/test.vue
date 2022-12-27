<template>
	<view class="">
		<view class="toop" v-for="(item,index) in adda" :key="index">
			<view class="testtop">
				{{item.title}}
				<text>时长：{{item.expire}}分钟</text>
				<view class="topin">
					<p>题目总数：{{item.question_count}}</p>
					<p>总分数：{{item.total_score}}</p>
					<p>及格分数：{{item.pass_score}}</p>
				</view>
			</view>
			<view class="testcon">
				<view :class="item.is_test===false ? 'annuaaa' : 'annu'" @click="qiehuan(item)">
					{{item.is_test ?  '你考过了' : '参加考试'}}
				</view>
			</view>
			<view class="testbtn">

			</view>
		</view>
	</view>
</template>

<script>
	import vivo from "@/api/vivo.js"
	export default {
		data() {
			return {
				is_test: false,
				even: {
					page: 1,
					limit: 5
				},
				sale:"",
				adda:[]
			};
		},
		onLoad() {
			this.test()
		},
		methods: {
			async test() {
				const aucn = await vivo.vivotest(this.even)
				this.sale = aucn.rows
				let array = this.sale;
				array.forEach((item, index)=> {
					this.adda.push(item)
				});
			},
			qiehuan(item) {
				// this.is_test = !this.is_test
				console.log("aaa",item);
				uni.showModal({
					content: '是否要开始考试？',
					success: function(res) {
						if (res.confirm) {
							uni.navigateTo({
								url: `/pages/test-detail/test-detail?id=${item.id}`
							})
							uni.removeStorageSync("userinfo")
						} else {
							// 执行取消后的操作
						}
					}
				})
			}
		},
		// 触底的事件
		onReachBottom() {
			// if (this.queryObj.pagenum * this.queryObj.pagesize >= this.total) return uni.$showMsg('数据加载完毕!')

			// if (this.isloading) return
			
			// 让页码值自增+1
			this.even.page++
			this.test()
		},
	}
</script>

<style lang="scss">
	.toop {
		width: 100%;
		// background-color: #aaffff;
		overflow-x: hidden;
	}

	.testtop {
				width: 96%;
		height: 170rpx;
		padding: 24rpx;
		font-weight: 900;
		// background-color: #ffff00;
		border-bottom: 2rpx solid #f5f5f3;
		position: relative;
	}

	.testtop text {
		position: absolute;
		right: 20rpx;
		color: #dc3545;
		font-size: 24rpx;
		font-weight: normal;
	}

	.topin {
		width: 96%;
		height: 140rpx;
		font-weight: normal;
		font-size: 32rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.testcon {
		width: 96%;
		height: 70rpx;
		padding: 24rpx 24rpx;
		// background-color: #aaffff;
	}

	.annu {
		width: 160rpx;
		height: 80rpx;
		background-color: #7be09f;
		text-align: center;
		line-height: 80rpx;
		margin-left: 76%;
		color: #fff;
		border-radius: 10rpx;
	}

	.annuaaa {
		width: 160rpx;
		height: 80rpx;
		background-color: #5ccc84;
		text-align: center;
		line-height: 80rpx;
		margin-left: 76%;
		color: #fff;
		border-radius: 10rpx;
	}

	.testbtn {
		width: 100%;
		height: 14rpx;
		background-color: #f5f5f3;
	}
</style>
