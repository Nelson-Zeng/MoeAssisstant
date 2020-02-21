//app.js
import './global/extensions.js'
import request from './global/request.js'
import util from './global/util.js'
import filters from './global/filters.js'
import constants from './global/constants.js'
import http from './global/http.js'

App({
  onLaunch: function() {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        env: 'moe-assisstant-hviue',
        traceUser: true,
      })
    }
    this.globalData = {}
    this.request = request
    this.util = util
    this.filters = filters
    this.constants = constants
    this.http = http
  }
})