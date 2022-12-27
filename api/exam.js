import request from "@/utils/request.js"

// 获取考场列表
const getExamList = (data) => {
	return request({
		url: `/mobile/testpaper/list?page=${data.page}&limit=${data.limit}`,
		method: 'GET',
	})
}

// 开始考试
const startExam = (data) => {
	return request({
		url: `/mobile/testpaper/read?id=${data.id}`,
		method: 'GET',
	})
}

export default {
	getExamList,
	startExam
}