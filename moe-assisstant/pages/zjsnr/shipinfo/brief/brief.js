import FilterSet from './filterSet.js'

const app = getApp()

const mockShip = [{
    "id": 3114,
    "picId": 391,
    "cid": 10039111,
    "dexIndex": 391,
    "name": "查尔斯·亚当斯",
    "nationality": "美国",
    "rarity": 5,
    "type": "防驱",
    "shipClass": "查尔斯·亚当斯级1号舰",
    "life": 24,
    "power": "15/35",
    "armor": "10/25",
    "torpedo": "1/1",
    "antiAircraft": "57/87",
    "antiSubmarine": "0/0",
    "tracking": "23/39",
    "evadeRate": "33/71",
    "hitRate": "40/99",
    "luck": 18,
    "speed": 33,
    "aircraftCapacity": "20/20",
    "fireRange": "短",
    "dimension": "小型",
    "equipmentSlot": 2,
    "originalEquipment": "MK-10导弹发射器/鞑靼人防空导弹",
    "fuel": "15",
    "cartridge": "35",
    "fuelCosting": "0.5",
    "steelCosting": "1",
    "timeCosting": "0.5",
    "recyclingIncome": "8/12/10/16",
    "enhancingIncome": "15/1/10/84",
    "firstSkill": null,
    "secondSkill": null
  },
  {
    "id": 3121,
    "picId": 403,
    "cid": 10040311,
    "dexIndex": 403,
    "name": "格拉摩根",
    "nationality": "英国",
    "rarity": 5,
    "type": "防驱",
    "shipClass": "郡级6号舰",
    "life": 28,
    "power": "18/38",
    "armor": "12/27",
    "torpedo": "1/1",
    "antiAircraft": "51/81",
    "antiSubmarine": "0/0",
    "tracking": "25/36",
    "evadeRate": "32/70",
    "hitRate": "40/99",
    "luck": 22,
    "speed": 31,
    "aircraftCapacity": "8/8/8",
    "fireRange": "短",
    "dimension": "小型",
    "equipmentSlot": 3,
    "originalEquipment": "海参防空导弹/海参导弹发射系统",
    "fuel": "30",
    "cartridge": "35",
    "fuelCosting": "0.7",
    "steelCosting": "1.2",
    "timeCosting": "0.55",
    "recyclingIncome": "8/12/10/16",
    "enhancingIncome": "21/1/12/66",
    "firstSkill": null,
    "secondSkill": null
  },
  {
    "id": 3150,
    "picId": 363,
    "cid": 10036311,
    "dexIndex": 363,
    "name": "炽热",
    "nationality": "苏联",
    "rarity": 4,
    "type": "导驱",
    "shipClass": "57бис型4号舰",
    "life": 26,
    "power": "8/36",
    "armor": "12/27",
    "torpedo": "1/1",
    "antiAircraft": "46/76",
    "antiSubmarine": "0/0",
    "tracking": "10/37",
    "evadeRate": "34/72",
    "hitRate": "38/97",
    "luck": 12,
    "speed": 34,
    "aircraftCapacity": "8/8",
    "fireRange": "短",
    "dimension": "小型",
    "equipmentSlot": 2,
    "originalEquipment": "“狗鱼”反舰导弹/СМ-59-1发射架",
    "fuel": "25",
    "cartridge": "50",
    "fuelCosting": "0.48",
    "steelCosting": "1.2",
    "timeCosting": "0.65",
    "recyclingIncome": "8/12/10/16",
    "enhancingIncome": "8/1/12/56",
    "firstSkill": null,
    "secondSkill": null
  },
  {
    "id": 2932,
    "picId": 407,
    "cid": 10040711,
    "dexIndex": 407,
    "name": "吕特晏斯",
    "nationality": "德国",
    "rarity": 5,
    "type": "防驱",
    "shipClass": "吕特晏斯级1号舰",
    "life": 24,
    "power": "15/35",
    "armor": "10/25",
    "torpedo": "1/1",
    "antiAircraft": "65/95",
    "antiSubmarine": "0/0",
    "tracking": "23/39",
    "evadeRate": "33/71",
    "hitRate": "40/99",
    "luck": 17,
    "speed": 33,
    "aircraftCapacity": "20/20",
    "fireRange": "短",
    "dimension": "小型",
    "equipmentSlot": 2,
    "originalEquipment": "标准-1/MK13导弹发射系统",
    "fuel": "15",
    "cartridge": "35",
    "fuelCosting": "0.6",
    "steelCosting": "1.1",
    "timeCosting": "0.55",
    "recyclingIncome": "8/12/10/16",
    "enhancingIncome": "15/1/12/94",
    "firstSkill": null,
    "secondSkill": null
  },
  {
    "id": 3232,
    "picId": 401,
    "cid": 10040111,
    "dexIndex": 401,
    "name": "胆大",
    "nationality": "苏联",
    "rarity": 4,
    "type": "导驱",
    "shipClass": "56-У型1号舰",
    "life": 28,
    "power": "11/39",
    "armor": "12/27",
    "torpedo": "1/1",
    "antiAircraft": "56/96",
    "antiSubmarine": "0/0",
    "tracking": "12/39",
    "evadeRate": "33/71",
    "hitRate": "38/97",
    "luck": 12,
    "speed": 34,
    "aircraftCapacity": "8/8",
    "fireRange": "短",
    "dimension": "小型",
    "equipmentSlot": 2,
    "originalEquipment": "“白蚁”M反舰导弹/КТ-15М-БРК发射器",
    "fuel": "25",
    "cartridge": "55",
    "fuelCosting": "0.5",
    "steelCosting": "1.2",
    "timeCosting": "0.625",
    "recyclingIncome": "8/12/10/16",
    "enhancingIncome": "11/1/12/86",
    "firstSkill": null,
    "secondSkill": null
  },
  {
    "id": 3282,
    "picId": 1097,
    "cid": 11009711,
    "dexIndex": 1097,
    "name": "长春",
    "nationality": "中国",
    "rarity": 5,
    "type": "导驱",
    "shipClass": "6607型3号舰",
    "life": 33,
    "power": "17/42",
    "armor": "15/40",
    "torpedo": "1/1",
    "antiAircraft": "30/60",
    "antiSubmarine": "0/0",
    "tracking": "15/42",
    "evadeRate": "45/89",
    "hitRate": "42/101",
    "luck": 25,
    "speed": 39,
    "aircraftCapacity": "8/8/8/0",
    "fireRange": "短",
    "dimension": "小型",
    "equipmentSlot": 3,
    "originalEquipment": "上游-1发射器/上游-1导弹",
    "fuel": "25",
    "cartridge": "65",
    "fuelCosting": "0.48",
    "steelCosting": "1.5",
    "timeCosting": "0.8",
    "recyclingIncome": "8/12/10/16",
    "enhancingIncome": "17/1/15/30",
    "firstSkill": null,
    "secondSkill": null
  },
  {
    "id": 3065,
    "picId": 1007,
    "cid": 11000713,
    "dexIndex": 1007,
    "name": "提尔比茨",
    "nationality": "德国",
    "rarity": 6,
    "type": "战列",
    "shipClass": "俾斯麦级2号舰",
    "life": 101,
    "power": "82/102",
    "armor": "80/100",
    "torpedo": "10/30",
    "antiAircraft": "39/69",
    "antiSubmarine": "0/0",
    "tracking": "22/49",
    "evadeRate": "30/55",
    "hitRate": "46/102",
    "luck": 16,
    "speed": 30,
    "aircraftCapacity": "4/4/4/4",
    "fireRange": "长",
    "dimension": "大型",
    "equipmentSlot": 4,
    "originalEquipment": "G国双联406毫米炮/四联533毫米磁性鱼雷/G国双联37毫米防空炮/联络电台",
    "fuel": "90",
    "cartridge": "130",
    "fuelCosting": "4.2",
    "steelCosting": "8.8",
    "timeCosting": "1",
    "recyclingIncome": "50/60/60/0",
    "enhancingIncome": "82/0/84/23",
    "firstSkill": null,
    "secondSkill": null
  },
  {
    "id": 3103,
    "picId": 156,
    "cid": 10015613,
    "dexIndex": 156,
    "name": "暴怒",
    "nationality": "英国",
    "rarity": 4,
    "type": "航战",
    "shipClass": "勇敢级3号舰",
    "life": 57,
    "power": "35/60",
    "armor": "28/43",
    "torpedo": "10/40",
    "antiAircraft": "20/50",
    "antiSubmarine": "0/0",
    "tracking": "20/47",
    "evadeRate": "30/63",
    "hitRate": "38/94",
    "luck": 18,
    "speed": 32,
    "aircraftCapacity": "0/0/10/5",
    "fireRange": "长",
    "dimension": "大型",
    "equipmentSlot": 4,
    "originalEquipment": "E国单装18英寸舰炮",
    "fuel": "50",
    "cartridge": "100",
    "fuelCosting": "2.08",
    "steelCosting": "3.9",
    "timeCosting": "0.75",
    "recyclingIncome": "50/60/60/10",
    "enhancingIncome": "22/0/28/20",
    "firstSkill": null,
    "secondSkill": null
  },
  {
    "id": 3137,
    "picId": 340,
    "cid": 10034012,
    "dexIndex": 340,
    "name": "波尔扎诺",
    "nationality": "意大利",
    "rarity": 4,
    "type": "重巡",
    "shipClass": "波尔扎诺级1号舰",
    "life": 42,
    "power": "36/61",
    "armor": "30/45",
    "torpedo": "10/45",
    "antiAircraft": "26/56",
    "antiSubmarine": "0/0",
    "tracking": "13/51",
    "evadeRate": "34/78",
    "hitRate": "35/92",
    "luck": 15,
    "speed": 35,
    "aircraftCapacity": "2/2/2",
    "fireRange": "中",
    "dimension": "中型",
    "equipmentSlot": 3,
    "originalEquipment": "I国双联203毫米主炮",
    "fuel": "35",
    "cartridge": "65",
    "fuelCosting": "1.28",
    "steelCosting": "2.5",
    "timeCosting": "0.65",
    "recyclingIncome": "30/40/30/0",
    "enhancingIncome": "36/5/15/13",
    "firstSkill": null,
    "secondSkill": null
  },
  {
    "id": 2949,
    "picId": 382,
    "cid": 10038212,
    "dexIndex": 382,
    "name": "坎伯兰",
    "nationality": "英国",
    "rarity": 3,
    "type": "重巡",
    "shipClass": "肯特级2号舰",
    "life": 49,
    "power": "35/55",
    "armor": "30/45",
    "torpedo": "10/45",
    "antiAircraft": "39/69",
    "antiSubmarine": "0/0",
    "tracking": "14/52",
    "evadeRate": "30/74",
    "hitRate": "35/91",
    "luck": 24,
    "speed": 32,
    "aircraftCapacity": "2/2/2",
    "fireRange": "中",
    "dimension": "中型",
    "equipmentSlot": 3,
    "originalEquipment": "E国双联8英寸炮",
    "fuel": "35",
    "cartridge": "70",
    "fuelCosting": "1.28",
    "steelCosting": "2.4",
    "timeCosting": "0.75",
    "recyclingIncome": "30/40/30/0",
    "enhancingIncome": "39/5/15/23",
    "firstSkill": null,
    "secondSkill": null
  }
]

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
    shipList: mockShip,
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

      detailInfo: false
  },
  onLoad() {
    const renderedShipInfo = mockShip.map(info => {
      info.url = app.filters.getZJSNShipSmallPicture(info.picId)
      info.backgroundPicSrc = app.filters.getZJSNShipBackground(info.rarity)
      info.updated = app.filters.getShipUpdateInfo(info.dexIndex)
      return info
    })

    this.setData({
      shipList: renderedShipInfo
    })
  },
  checkShipDetail(e) {
    const shipId = e.currentTarget.id
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
    this.data.tempDataContainer = {}

    this.setData({
      showSetting: false
    })
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
    wx.showToast({
      title: 'test',
      duration: 2000
    })
  },
  sortingKeyChanged(e) {
    const id = Number(e.currentTarget.id.match(new RegExp(/\d+/)))
    
    this.data.sortingKeys.map(key => {
      key.selected = false

      if (key.id === id) {
        key.selected = true
      }
    })

    this.setData({
      sortingKeys: this.data.sortingKeys
    })
  },
  sortingOrientationChanged(e) {
    this.setData({
      sortDesc: e.detail.value
    })
  },
  detailInfoStatusChanged(e) {
    this.setData({
      detailInfo: e.detail.value
    })
  }
})