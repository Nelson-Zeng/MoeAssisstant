const app = getApp()

Page({
  data: {
    shipUpdated: false,
    shipInfo: {},
    showIllustration: false,
    illustrationList: [],
    backgroundPicSrc: '',
    illustrationIndex: 0,

    illustrationTouchStartX: 0,

    illustrationTouchStartTime: 0,

    doubleFinger: 0,

    showSimpleAccessTable: false,
    buildTableWidthDistribution: ['12%', '12%', '12%', '12%', '12%', '20%', '20%'],
    dropTableWidthDistribution: ['25%', '25%', '25%', '25%'],
    buildSimpleTable: {
      title: '常用建造数据列表',
      explaination: '注：已过滤了样本数较少的数据',
      headerItemList: ['油', '弹', '钢', '铝', '出货数', '公式使用数', '出货率']
    },
    dropSimpleTable: {
      title: '常用掉落数据列表',
      explaination: '注：已过滤了样本数较少的数据',
      headerItemList: ['节点', '出货数', '总打捞数', '出货率']
    },

    showDetailAccessTable: false,
    detailTable: {
      explaination: '注：已过滤了样本数过少的数据'
    },
    detailWidthDistribution: [],

    originalShipInfo: {},
    updatedShipInfo: {},
    canBeUpdated: false,

    acquireRouteData: {},

    showBuild: false,
    showDrop: false,
    toast: ''
  },
  async onLoad() {
    wx.showShareMenu({})

    let queryPromise
    const shipInfo = app.currentShipInfo
    // 图鉴ID大于1000说明是改造船，需要获取原始数据；反之需要判断该船是否可以改造，如果可以的话获取改造数据
    if (shipInfo.dexIndex > 1000 && shipInfo.dexIndex < 8000) {
      this.data.updatedShipInfo = shipInfo

      queryPromise = new Promise((resolve, reject) => {
        app.http.get(app.http.GET_RELATED_SHIP_INFO, {
          id: shipInfo.dexIndex
        }, {}, response => {
          this.data.originalShipInfo = response.data

          this.setData({
            canBeUpdated: true,
            shipUpdated: true,
            shipInfo: shipInfo
          })
          resolve()
        })
      })
    } else if (shipInfo.dexIndex > 8000) {
      queryPromise = new Promise((resolve, reject) => {
        this.setData({
          canBeUpdated: false,
          shipInfo: shipInfo
        })
        resolve()
      })
    } else if (shipInfo.dexIndex < 1000 && shipInfo.dexIndex > 0) {
      this.data.originalShipInfo = shipInfo

      queryPromise = new Promise((resolve, reject) => {
        app.http.get(app.http.GET_RELATED_SHIP_INFO, {
          id: shipInfo.dexIndex
        }, {}, response => {
          if (Object.keys(response.data).length > 0) {
            this.data.updatedShipInfo = response.data
            this.setData({
              canBeUpdated: true,
              shipInfo: shipInfo
            })
          } else {
            this.setData({
              canBeUpdated: false,
              shipInfo: shipInfo
            })
          }
          resolve()
        })
      })
    }

    queryPromise.then(() => {
      this.initData(shipInfo)
    })
  },
  statusChange(e) {
    this.setData({
      shipUpdated: e.detail.value
    })
    this.initData(e.detail.value ? this.data.updatedShipInfo : this.data.originalShipInfo)
  },
  initData(shipInfo) {
    const renderedShipInfo = Object.assign(shipInfo, {
      url: app.filters.getZJSNShipMediumPicture(shipInfo.picId),
      backgroundPicSrc: app.filters.getZJSNSimpleShipBackground(shipInfo.rarity)
    })

    this.setData({
      shipInfo: renderedShipInfo
    })
  },
  async checkIllustration() {
    const response =
      await app.http.get(app.http.GET_SHIP_ILLUSTRATIONS, {
        id: this.data.shipInfo.dexIndex
      })

    this.setData({
      illustrationList: response.data.map(url => {
        return `${app.constants.STATIC_RESOURCE_DOMAIN}/jianr/moeassisstant/zjsnr/${url}`
      }),
      backgroundPicSrc: `url(${app.filters.getZJSNClearShipBackground(this.data.shipInfo.rarity)})`,
      showIllustration: true
    })

    wx.showToast({
      title: '点击按钮切换立绘，点击界面其他部分退出，双指可放大立绘',
      icon: 'none',
      duration: 1000
    })
  },
  checkDialogue() {
    wx.showToast({
      title: '当前功能未开放',
      icon: 'none',
      duration: 1000
    })
  },
  illustrationTouchstart(e) {
    if (e.touches.length === 1) {
      // 单指滑动事件
      this.data.illustrationTouchStartX = e.touches[0].pageX
      this.data.illustrationTouchStartTime = e.timeStamp
    } else if (e.touches.length === 2) {
      // 双指缩放事件
      this.doubleFinger = 2 //强制额外延迟1tick减少鬼触
    }

  },
  prevImage() {
    this.setData({
      illustrationIndex: app.util.getImageSwipperIndex(this.data.illustrationIndex - 1, this.data.illustrationList.length)
    })
  },
  nextImage() {
    this.setData({
      illustrationIndex: app.util.getImageSwipperIndex(this.data.illustrationIndex + 1, this.data.illustrationList.length)
    })
  },
  illustrationTouchend(e) {
    if (this.doubleFinger > 0) {
      this.doubleFinger -= 1
      return
    }
    if (e.changedTouches.length === 1) {
      // 单指滑动事件
      const illustrationTouchEndX = e.changedTouches[0].pageX
      const illustrationLength = this.data.illustrationList.length
      const windowWidth = wx.getSystemInfoSync().windowWidth

      if (e.timeStamp - this.data.illustrationTouchStartTime > 200) { //认为拖动时间大于200的不是快速滑动切换或关闭
        return
      }

      /*if (Math.abs(illustrationTouchEndX - this.data.illustrationTouchStartX) > windowWidth / 5) {
        const newIndex = illustrationTouchEndX - this.data.illustrationTouchStartX > 0 ? this.data.illustrationIndex - 1 : this.data.illustrationIndex + 1

        this.setData({
          illustrationIndex: app.util.getImageSwipperIndex(newIndex, illustrationLength)
        })
      } else */
      if (Math.abs(illustrationTouchEndX - this.data.illustrationTouchStartX) < windowWidth / 40) {
        this.closeImage() //认为滑动距离特别短的是单击事件
      }
    } else if (e.changedTouches.length === 2) {}

  },
  closeImage() {
    if (this.doubleFinger > 0) {
      this.doubleFinger -= 1
      return
    }
    this.setData({
      showIllustration: false
    })
  },
  async checkAccess() {
    wx.showLoading({
      title: '正在获取数据',
    })
    let tempCid = Number(this.data.shipInfo.cid)
    if (tempCid > 10100000) tempCid = tempCid - 100000

    const response = await app.http.get(app.http.GET_SHIP_ACQUIRE_ROUTES, {
      cid: tempCid
    })

    wx.hideLoading()
    this.data.acquireRouteData = response.data
    this.setData2SimpleTable()
  },
  setData2SimpleTable() {
    const simpleBuildContent = this.data.acquireRouteData.build.simple.map(item => {
      return [item.oil, item.ammo, item.steel, item.al, item.C, item.C_form, item.scale]
    })
    const simpleDropContent = this.data.acquireRouteData.drop.simple.map(item => {
      return [item.nodeName, item.C, item.C_node, item.scale]
    })
    this.setData({
      showSimpleAccessTable: true,
      buildSimpleTable: Object.assign(this.data.buildSimpleTable, {
        contentList: simpleBuildContent
      }),
      dropSimpleTable: Object.assign(this.data.dropSimpleTable, {
        contentList: simpleDropContent
      }),
      showBuild: this.data.acquireRouteData.build.simple.length !== 0,
      showDrop: this.data.acquireRouteData.drop.simple.length !== 0
    })
  },
  clickDetailTable(e) {
    return
  },
  checkMore(e) {
    const type = e.currentTarget.id

    let tableTitle
    let headerItemList
    let contentList
    let widthDistribution
    switch (type) {
      case 'build':
        tableTitle = '详细建造数据查询表'
        headerItemList = this.data.buildSimpleTable.headerItemList
        contentList = this.data.acquireRouteData.build.detail.map(item => {
          return [item.oil, item.ammo, item.steel, item.al, item.C, item.C_form, item.scale]
        })
        widthDistribution = this.data.buildTableWidthDistribution
        break
      case 'drop':
        tableTitle = '详细掉落数据查询表'
        headerItemList = this.data.dropSimpleTable.headerItemList
        contentList = this.data.acquireRouteData.drop.detail.map(item => {
          return [item.nodeName, item.C, item.C_node, item.scale]
        })
        widthDistribution = this.data.dropTableWidthDistribution
        break
    }

    this.setData({
      showDetailAccessTable: true,
      detailTable: Object.assign(this.data.detailTable, {
        title: tableTitle,
        headerItemList: headerItemList,
        contentList: contentList
      }),
      detailWidthDistribution: widthDistribution
    })
  },
  closeDetailTable() {
    this.setData({
      showDetailAccessTable: false
    })
  },
  clickOnTable() {
    return
  },
  closeSimpleAccessTable(e) {
    this.setData({
      showSimpleAccessTable: false
    })
  }
})