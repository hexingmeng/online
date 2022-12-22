// 引入http请求文件
import request from "@/utils/request.js"

const schtest = (data) => {
	return request({
		url: `/mobile/user_history/list`,
		method: 'GET',
		data
	})
}

// 导出所有的api方法
export default {
	schtest
}
