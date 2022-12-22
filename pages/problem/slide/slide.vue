<template>
	<view >
		<web-view :src="kiss"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				kiss:""
			};
		},
		onLoad(option) {
			this.kiss=option.url
		}
	}
</script>

<style lang="scss">

</style>
