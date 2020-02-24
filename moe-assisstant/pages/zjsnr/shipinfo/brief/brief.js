import FilterSet from './filterSet.js'

const app = getApp()

const SHIP_DIMENSION_FAST_SELECTIONS = [{
  title: '我全都要'
}]

const DETAIL_SHIP_DIMENSIONS = [{
  id: 0,
  title: '大型'
}, {
  id: 1,
  title: '中型'
}, {
  id: 2,
  title: '小型'
}]

const SHIP_NATIONALITY_FAST_SELECTIONS = [{
    title: '我全都要'
  },
  {
    title: '同盟国',
    content: [0, 1, 2, 4, 6, 7]
  },
  {
    title: '轴心国',
    content: [2, 3, 4, 5]
  }
]

const DETAIL_SHIP_NATIONS = [{
    id: 0,
    title: '中国'
  },
  {
    id: 1,
    title: '英国'
  },
  {
    id: 2,
    title: '法国'
  },
  {
    id: 3,
    title: '德国'
  },
  {
    id: 4,
    title: '意大利'
  },
  {
    id: 5,
    title: '日本'
  },
  {
    id: 6,
    title: '苏联'
  },
  {
    id: 7,
    title: '美国'
  },
  {
    id: 8,
    title: '其他'
  }
]

const SHIP_TYPE_FAST_SELECTIONS = [{
    title: '我全都要'
  },
  {
    title: '天降正义',
    content: [0, 1, 2]
  },
  {
    title: '口径即正义',
    content: [3, 4, 5, 10]
  },
  {
    title: '海上渔夫',
    content: [1, 7, 9, 11]
  },
  {
    title: '猎杀潜航',
    content: [12, 13]
  },
  {
    title: '大人，时代变了',
    content: [15, 16, 17]
  },
  {
    title: '主力披挂',
    content: [0, 1, 2, 3, 4, 5, 15, 16, 17]
  },
  {
    title: '护卫上阵',
    content: [6, 7, 8, 9, 10, 11, 14]
  }
]
const DETAIL_SHIP_TYPES = [{
    id: 0,
    title: '航母'
  },
  {
    id: 1,
    title: '轻母'
  },
  {
    id: 2,
    title: '装母'
  },
  {
    id: 3,
    title: '战列'
  },
  {
    id: 4,
    title: '航战'
  },
  {
    id: 5,
    title: '战巡'
  },
  {
    id: 6,
    title: '重巡'
  },
  {
    id: 7,
    title: '航巡'
  },
  {
    id: 8,
    title: '雷巡'
  },
  {
    id: 9,
    title: '轻巡'
  },
  {
    id: 10,
    title: '重炮'
  },
  {
    id: 11,
    title: '驱逐'
  },
  {
    id: 12,
    title: '潜艇'
  },
  {
    id: 13,
    title: '炮潜'
  },
  {
    id: 14,
    title: '补给'
  },
  {
    id: 15,
    title: '导驱'
  },
  {
    id: 16,
    title: '防驱'
  },
  {
    id: 17,
    title: '防战'
  }
]

Page({
  data: {
    shipList: [],
    settingIconPostion: {
      top: 'calc(100% - 200px)',
      right: '5px'
    },
    settingIconTouchingOffset: {
      top: 0,
      left: 0
    },
    settingIconTouchingStartTime: 0,
    showSetting: false,

    nationalitySetting: {},
    typeSetting: {},
    dimensionSetting: {},

    dataContainer: {},
    tempDataContainer: {},

    sortingKeys: [{
      id: 0,
      title: '图鉴ID',
      value: 0,
      selected: true
    }, {
      id: 1,
      title: '火力',
      value: 1,
      selected: false
    }, {
      id: 2,
      title: '鱼雷',
      value: 2,
      selected: false
    }, {
      id: 3,
      title: '耐久',
      value: 3,
      selected: false
    }, {
      id: 4,
      title: '航速',
      value: 5,
      selected: false
    }],
    sortDesc: false,

    detailInfo: false,

    limitationDataContainer: {
      nationalities: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      types: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
      dimensions: [0, 1, 2],
      sortKey: 0,
      sequence: 'asc',
      page: 1,
      capacity: 15,
      keyWord: ''
    }
  },
  onLoad() {
    this.updateShipList()
  },
  onReachBottom(e) {
    app.util.toast.info('Yes, RPG!')
  },
  checkShipDetail(e) {
    const shipId = Number(e.currentTarget.id)
    app.currentShipInfo = this.data.shipList.find(item => {
      return item.dexIndex === shipId
    })
    app.util.navigateTo('/pages/zjsnr/shipinfo/detail/detail')
  },
  startSettingIconTouching(e) {
    this.data.settingIconTouchingOffset = {
      top: e.touches[0].clientY - e.target.offsetTop,
      left: e.touches[0].clientX - e.target.offsetLeft
    }

    this.data.settingIconTouchingStartTime = e.timeStamp
  },
  moveSettingIconTouching(e) {
    this.setData({
      settingIconPostion: {
        top: `${e.touches[0].clientY - this.data.settingIconTouchingOffset.top}px`,
        right: `${wx.getSystemInfoSync().screenWidth - (e.touches[0].clientX - this.data.settingIconTouchingOffset.left) - 50}px`
      }
    })
  },
  finishSettingIconTouching(e) {
    if (e.timeStamp - this.data.settingIconTouchingStartTime < 100) {
      // 认为触发时间小于150的是点击事件
      this.initFilterSettings(() => {
        this.setData({
          showSetting: true
        })
      })
    } else {
      // 认为触发时间大于150的是拖动事件
      const horizontalDistance = Math.ceil(e.changedTouches[0].clientX) - 5
      const currentOffsetTop = `${e.changedTouches[0].clientY - this.data.settingIconTouchingOffset.top}px`

      let index = 0
      let animationTimeout = 0
      const moveIcon = () => {
        animationTimeout = setTimeout(() => {
          if (index < 10) {
            this.setData({
              settingIconPostion: {
                top: currentOffsetTop,
                right: `${wx.getSystemInfoSync().screenWidth - (e.changedTouches[0].clientX - this.data.settingIconTouchingOffset.left) - 50 - horizontalDistance / 10 * index}px`
              }
            })

            index++
            moveIcon()
          } else {
            clearTimeout(animationTimeout)

            this.setData({
              settingIconPostion: {
                top: currentOffsetTop,
                right: '5px'
              }
            })

            this.data.settingIconTouchingOffset = {
              top: 0,
              left: 0
            }
            this.settingIconTouchingStartTime = 0
          }
        }, 10)
      }

      moveIcon()
    }
  },
  initFilterSettings(func) {
    this.setData({
      nationalitySetting: new FilterSet('国籍选择', SHIP_NATIONALITY_FAST_SELECTIONS, DETAIL_SHIP_NATIONS, this.data.dataContainer.nationalities),
      typeSetting: new FilterSet('舰种选择', SHIP_TYPE_FAST_SELECTIONS, DETAIL_SHIP_TYPES, this.data.dataContainer.types),
      dimensionSetting: new FilterSet('舰型选择', SHIP_DIMENSION_FAST_SELECTIONS, DETAIL_SHIP_DIMENSIONS, this.data.dataContainer.dimensions)
    })

    func()
  },
  cancelSetting() {
    this.data.tempDataContainer = {}

    this.setData({
      showSetting: false
    })
  },
  confirmSetting() {
    this.data.dataContainer = Object.assign({}, this.data.tempDataContainer)
    this.data.limitationDataContainer = Object.assign(this.data.limitationDataContainer, this.data.tempDataContainer)
    this.data.tempDataContainer = {}

    this.setData({
      showSetting: false
    })

    this.updateShipList()
  },
  nationalityChanged(e) {
    this.data.tempDataContainer.nationalities = e.detail
  },
  typeChanged(e) {
    this.data.tempDataContainer.types = e.detail
  },
  dimensionChanged(e) {
    this.data.tempDataContainer.dimensions = e.detail
  },
  search(e) {
    this.data.limitationDataContainer.keyWord = e.detail.value

    this.updateShipList()
  },
  searchByIcon() {
    console.log(1)
    const query = wx.createSelectorQuery()

    query.select('#search').fields({
      dataset: true,
      node: true,
      context: true
    }, res => {
      console.log(res)
    }).exec()
  },
  sortingKeyChanged(e) {
    const id = Number(e.currentTarget.id.match(new RegExp(/\d+/)))

    this.data.sortingKeys.map(key => {
      key.selected = false

      if (key.id === id) {
        key.selected = true
        this.data.limitationDataContainer.sortKey = key.id
      }
    })

    this.setData({
      sortingKeys: this.data.sortingKeys
    })

    this.updateShipList()
  },
  sortingOrientationChanged(e) {
    this.data.limitationDataContainer.sequence = e.detail.value ? 'desc' : 'asc'

    this.setData({
      sortDesc: e.detail.value
    })

    this.updateShipList()
  },
  detailInfoStatusChanged(e) {
    this.setData({
      detailInfo: e.detail.value
    })
  },
  settingIgnoreTouchMove: function() {},
  async updateShipList() {
    const response = await app.http.get(app.http.GET_SHIP_LIST, {}, this.data.limitationDataContainer)

    const shipList = response.data.shipList
    const renderedShipInfo = shipList.map(info => {
      info.url = app.filters.getZJSNShipSmallPicture(info.picId)
      info.backgroundPicSrc = app.filters.getZJSNShipBackground(info.rarity)
      info.updated = app.filters.getShipUpdateInfo(info.dexIndex)
      return info
    })

    this.setData({
      shipList: renderedShipInfo
    })
  }
})