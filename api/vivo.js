// 引入http请求文件
import request from "@/utils/request.js"

const vivotest = (data) => {
	return request({
		url: `/mobile/testpaper/list?page=${data.page}&limit=${data.limit}`,
		method: 'GET'
	})
}

const vivoflashsale = (data) => {
	return request({
		url: `/mobile/flashsale?page=${data.page}&limit=${data.limit}&usable=${data.usable}`,
		method: 'GET'
	})
}
const vivogroup = (data) => {
	return request({
		url: `/mobile/group?page=${data.page}&limit=${data.limit}&usable=${data.usable}`,
		method: 'GET'
	})
}
const vivolive = (data) => {
	return request({
		url: `/mobile/live/list?page=${data.page}&limit=${data.limit}`,
		method: 'GET'
	})
}
const vivocolumn = (data) => {
	return request({
		url: `/mobile/column/list?page=${data.page}&limit=${data.limit}`,
		method: 'GET'
	})
}

const vivoshop =(data)=>{
	return request({
		url:`/mobile/course/read?id=${data.id}&column_id=${data.column_id}&group_id=${data.group_id}&flashsale_id=${data.flashsale_id}`,
		method:"GET"
	})
}

const vivobbss = (data) => {
	return request({
		url: `/mobile/bbs?page=${data.page}`,
		method: 'GET'
	})
}

const vivobbsdet = (data) => {
	return request({
		url: `/mobile/post/list?page=${data.page}&keyword=${data.keyword}&bbs_id=${data.bbs_id}`,
		method: 'GET'
	})
}

// 导出所有的api方法
export default {
	vivotest,
	vivoflashsale,
	vivogroup,
	vivolive,
	vivocolumn,
	vivoshop,
	vivobbss,
	vivobbsdet
}
