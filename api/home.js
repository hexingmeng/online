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

const receive = (data) => {
	return request({
		url: `/mobile/user_coupon/receive`,
		method: 'POST',
		data
	})
}

const coupon = (data) => {
	return request({
		url: `/mobile/user_coupon?page=${data.page}&limit=${data.limit}`,
		method: 'GET'
	})
}

const search = (data) => {
	return request({
		url: `/mobile/search?keyword=${data.keyword}&page=${data.page}&type=${data.type}`,
		method: 'GET'
	})
}

const group = (data) => {
	return request({
		url: `/mobile/group?usable=${data.usable}`,
		method: 'GET'
	})
}

// 导出所有的api方法
export default {
	homeindex,
	priceindex,
	receive,
	coupon,
	search,
	group
}
