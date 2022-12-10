// 引入http请求文件
import request from "@/utils/request.js"

const homeindex = (data) => {
	return request({
		url: `/mobile/index`,
		method: 'GET',
		data
	})
}
const priceindex = (data) => {
	return request({
		url: `/mobile/coupon`,
		method: 'GET',
		data
	})
}

// 导出所有的api方法
export default {
	homeindex,
	priceindex
}
