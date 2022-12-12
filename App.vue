<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	// 引入公共样式
	@import url("@/common/free.css");
	// 图标
	@import "common/iconfont.css";
	/* @import url('@/static/iconfont/iconfont.css'); */
	// 动画
	@import url('@/common/animate.min.css');
	/*每个页面公共css */
	@import url("@/common/common.css");
</style>
