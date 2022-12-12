<template>
  <view class="classify">
    <view class="conner" @click="NavLogin(item.id)" v-for="item in Mycon" :key="item.id">
      <view class="iconfont" :class="item.icon"></view>
      <view class="">{{item.title}}</view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    Mycon: {
      type: Array,
      default: () => [
        {
          id: 1,
          icon: 'iconfont icon-OrderHistory',
          title: '订单',
          pages: '/pages/order/order',
        },
        {
          id: 2,
          icon: 'iconfont icon-pinglun2',
          title: '消息',
          pages: '/pages/news/news',
        },
        {
          id: 3,
          icon: 'iconfont icon-shoucang1',
          title: '收藏',
          pages: '/pages/collect/collect',
        },
        {
          id: 4,
          icon: 'iconfont icon-e-learning-monitor',
          title: '在学',
          pages: '/pages/learn/learn',
        },
      ],
    },
  },
  methods: {
    NavLogin(id) {
      // const login = uni.getStorageSync('login')
      // if (login) {
      //   this.Mycon.forEach((item) => {
      //     if (item.id == id) {
      //       uni.navigateTo({
      //         url: item.pages,
      //       })
      //     }
      //   })
      // } else {
        const asd=uni.getStorageSync("userinfo");
        console.log("asd",asd);
        if (!asd.username) {
        	uni.navigateTo({
        		url: "/pages/login/login"
        	})
        } else if(asd.phone){
        	// uni.navigateTo({
        	// 	url:item.pages
        	// })
			this.Mycon.forEach((item) => {
			    if (item.id == id) {
			      uni.reLaunch({
			        url: item.pages,
			      })
			    }
			  })
        }
        else {
        	uni.navigateTo({
        		url: "/pages/tele/tele"
        	})
        }
      }
    // },
  },
}
</script>

<style>
.classify {
  width: 90%;
  height: 160rpx;
  background-color: #fff;
  border-radius: 10rpx;
  display: flex;
  align-content: center;
  justify-content: space-between;
  box-shadow: 0rpx 0rpx 20rpx 0rpx #aaa;
}

.iconfont {
  color: #f9ba17;
  margin-top: 40rpx;
  font-size: 40rpx;
  margin-bottom: 14rpx;
}

.conner {
  width: 20%;
  height: 160rpx;
  /* background-color: #55ff00; */
  text-align: center;
  color: #6e747c;
  font-size: 24rpx;
}
</style>
