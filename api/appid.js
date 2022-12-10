// 引入http请求文件
import request from "@/utils/request.js"

const getLogin = (data) => {
	return request({
		url: `/mobile/login`,
		method: 'POST',
		data
	})
}

const getBanner = (data) => {
	return request({
		url: `/mobile/reg`,
		method: 'POST',
		data
	})
}

const captcha=(data)=>{
	return request({
		url: `/mobile/get_captcha`,
		method: 'POST',
		data
	})
}

const bind=(data)=>{
	return request({
		url: `/mobile/bind_mobile`,
		method: 'POST',
		data
	})
}

const logout=(data)=>{
	return request({
		url: `/mobile/logout`,
		method: 'POST',
		data
	})
}

const forget=(data)=>{
	return request({
		url: `/mobile/forget`,
		method: 'POST',
		data
	})
}


// 导出所有的api方法
export default {
	getBanner,
	getLogin,
	captcha,
	bind,
	logout,
	forget
}
