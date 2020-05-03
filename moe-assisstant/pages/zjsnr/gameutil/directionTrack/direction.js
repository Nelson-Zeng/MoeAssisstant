const app = getApp()

Page({
  data: {
    inputContentList: [{
      id: 0,
      name: '我方旗舰航速',
      value: 0,
      placeHolder: '请输入我方旗舰航速'
    }, {
      id: 1,
      name: '我方舰队平均航速',
      value: 0,
      placeHolder: '请输入我方舰队平均航速'
    }, {
      id: 2,
      name: '敌方旗舰航速',
      value: 0,
      placeHolder: '请输入敌方旗舰航速'
    }, {
      id: 3,
      name: '敌方舰队平均航速',
      value: 0,
      placeHolder: '请输入敌方舰队平均航速'
    }],

    dataContainer: {},
    caculateFlag: false,

    trackingSuccessList: {},
    trackingFailList: {},
    baseTrackingSuccessList: {
      title: '索敌成功',
      headerItemList: ['T优', '同航', '反航', 'T劣'],
      columnWidth: ['25%', '25%', '25%', '25%']
    },
    baseTrackingFailList: {
      title: '索敌失败',
      headerItemList: ['T优', '同航', '反航', 'T劣'],
      columnWidth: ['25%', '25%', '25%', '25%']
    }
  },
  onLoad(options) {
    wx.showShareMenu({})

    if (Object.keys(options).length > 0) {
      this.data.inputContentList[2].value = options.flagShipSpeed
      this.data.inputContentList[3].value = options.speed
      this.data.dataContainer['敌方旗舰航速'] = options.flagShipSpeed
      this.data.dataContainer['敌方舰队平均航速'] = options.speed

      this.setData({
        inputContentList: this.data.inputContentList
      })
    }
  },
  inputTracking(e) {
    this.data.dataContainer[e.currentTarget.id] = Number(e.detail.value)

    let caculateFlag = false

    const values = Object.values(this.data.dataContainer)
    if (values.length === 4) {
      caculateFlag = app.util.judgeFlagStatus(...values) === values.length
    }

    if (caculateFlag) {
      // 计算功能照抄的，我也看不懂原作者这些变量都是啥玩意儿。
      const s10 = this.data.dataContainer['我方旗舰航速']
      const s1x = this.data.dataContainer['我方舰队平均航速']
      const s20 = this.data.dataContainer['敌方旗舰航速']
      const s2x = this.data.dataContainer['敌方舰队平均航速']
      const d01 = Math.max(0, 10 + Math.min(s10 - s20, s1x - s2x))
      const d02 = Math.max(0, 30 + (s1x - s2x))
      const d03 = Math.max(0, 30 - (s10 - s20))
      const d04 = Math.max(0, 15 - (s1x - s2x))
      const d0 = d01 + d02 + d03 + d04
      const d11 = Math.max(0, 20 + Math.min(s10 - s20, s1x - s2x))
      const d12 = Math.max(0, 35 + (s1x - s2x))
      const d13 = Math.max(0, 25 - (s10 - s20))
      const d14 = Math.max(0, 5 - (s1x - s2x))
      const d1 = d11 + d12 + d13 + d14
      const d01a = d01 / d0 * 100
      const d02a = d02 / d0 * 100
      const d03a = d03 / d0 * 100
      const d04a = d04 / d0 * 100
      const d11a = d11 / d1 * 100
      const d12a = d12 / d1 * 100
      const d13a = d13 / d1 * 100
      const d14a = d14 / d1 * 100

      this.setData({
        caculateFlag: caculateFlag,
        trackingSuccessList: Object.assign(this.data.baseTrackingSuccessList, {
          contentList: [[d11a.toFixed(1), d12a.toFixed(1), d13a.toFixed(1), d14a.toFixed(1)]]
        }),
        trackingFailList: Object.assign(this.data.baseTrackingFailList, {
          contentList: [[d01a.toFixed(1), d02a.toFixed(1), d03a.toFixed(1), d04a.toFixed(1)]]
        })
      })
    }
  }
})