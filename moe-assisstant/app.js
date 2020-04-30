//app.js
import './global/extensions.js'
import util from './global/util.js'
import filters from './global/filters.js'
import constants from './global/constants.js'
import http from './global/http.js'

App({
  onLaunch() {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        env: 'moe-assisstant-hviue',
        traceUser: true,
      })
    }
    this.globalData = {
      showChinese: true
    }
    this.util = util
    this.filters = filters
    this.constants = constants
    this.http = http
  },
  onShow() {
    const updateManager = wx.getUpdateManager()

    updateManager.onUpdateReady(() => {
      wx.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？',
        success: res => {
          if (res.confirm) {
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
            updateManager.applyUpdate()
          }
        }
      })
    })
  }
})