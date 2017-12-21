//获取应用实例  
var app = getApp()
Page({
	data: {
		// tab切换  
		currentTab: 0
	},
	onLoad: function () {
		var that = this;
	},

	/** 
	   * 滑动切换tab 
	   */
	bindChange: function (e) {
		this.setData({ currentTab: e.detail.current });
	},

	/** 
	 * 点击tab切换 
	 */
	swichTab: function (e) {
		var that = this;
		if (this.data.currentTab == e.target.dataset.acitve) {
			return false;
		} else {
			that.setData({ currentTab: e.target.dataset.acitve})
		}
	}
})  