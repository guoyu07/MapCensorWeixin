//logs.js
const util = require('../../utils/util.js')

Page({
	onReady: function (e) {
		// 使用 wx.createMapContext 获取 map 上下文
		this.mapCtx = wx.createMapContext('myMap');

	},
	data: {
		logs: []
	},
	onLoad: function () {
		console.log('case');
		wx.request({
			url: getApp().globalData.servsers + 'bs/case/list',
			data: {"pageSize": 1000, "pageNum": 1},
			method: 'GET', 
			header: {"x-access-token": getApp().globalData.token},
			success: res => {
				console.log(res.data.result)
				this.setData({
					caseResult: res.data.result
				})
			}
		})
	}
})
