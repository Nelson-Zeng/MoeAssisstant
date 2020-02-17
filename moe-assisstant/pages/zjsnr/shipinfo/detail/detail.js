const app = getApp()

const mockShipInfo = {
  "id": 5256,
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
  "firstSkillTitle": "四大金刚",
  "secondSkillTitle": null,
  "firstSkill": "自身战斗造成伤害提升10%，命中+10，演习获得经验提升15%。",
  "secondSkill": null
}

const originalShipInfo = {
  "id": 5087,
  "picId": 97,
  "cid": 10009711,
  "dexIndex": 97,
  "name": "果敢",
  "nationality": "苏联",
  "rarity": 4,
  "type": "驱逐",
  "shipClass": "7型17号舰",
  "life": 18,
  "power": "12/32",
  "armor": "8/23",
  "torpedo": "12/62",
  "antiAircraft": "20/50",
  "antiSubmarine": "24/57",
  "tracking": "5/16",
  "evadeRate": "39/83",
  "hitRate": "31/88",
  "luck": 25,
  "speed": 39,
  "aircraftCapacity": "0",
  "fireRange": "短",
  "dimension": "小型",
  "equipmentSlot": 2,
  "originalEquipment": "S国单装130毫米炮/四联533毫米鱼雷",
  "fuel": "10",
  "cartridge": "15",
  "fuelCosting": "0.48",
  "steelCosting": "0.9",
  "timeCosting": "0.5",
  "recyclingIncome": "4/8/6/0",
  "enhancingIncome": "0/12/8/0",
  "firstSkillTitle": null,
  "secondSkillTitle": null,
  "firstSkill": null,
  "secondSkill": null
}

Page({
  data: {
    shipUpdated: true,
    shipInfo: {},
    showIllustration: false,
    illustrationList: [
      'https://6d6f-moe-assisstant-hviue-1301021771.tcb.qcloud.la/zjsn/ships/L/NORMAL/L_NORMAL_1097.png',
      'https://6d6f-moe-assisstant-hviue-1301021771.tcb.qcloud.la/zjsn/ships/L/NORMAL/L_NORMAL_97_1.png',
      'https://6d6f-moe-assisstant-hviue-1301021771.tcb.qcloud.la/zjsn/ships/L/NORMAL/L_NORMAL_97_2.png',
      'https://6d6f-moe-assisstant-hviue-1301021771.tcb.qcloud.la/zjsn/ships/L/NORMAL/L_NORMAL_97_3.png'
    ],
    backgroundPicSrc: 'url(https://6d6f-moe-assisstant-hviue-1301021771.tcb.qcloud.la/zjsn/star-background/ship_star_bg5.png)',
    illustrationIndex: 0,

    illustrationTouchStartX: 0,
  },
  onLoad() {
    this.initData()
  },
  initData(flag) {
    const defaultInfo = flag ? originalShipInfo : mockShipInfo

    const renderedShipInfo = Object.assign(defaultInfo, {
      url: app.filters.getZJSNShipXMediumPicture(defaultInfo.picId),
      backgroundPicSrc: app.filters.getZJSNShipBackground(defaultInfo.rarity)
    })

    this.setData({
      shipInfo: renderedShipInfo
    })
  },
  statusChange(e) {
    this.initData(!e.detail.value)
  },
  checkIllustration() {
    this.setData({
      showIllustration: true
    })

    wx.showToast({
      title: '左右滑动可切换',
      icon: 'none',
      duration: 500
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
    } else if (e.touches.length === 2) {
      // 双指缩放事件
    }

  },
  illustrationTouchend(e) {
    if (e.changedTouches.length === 1) {
      // 单指滑动事件
      const illustrationTouchEndX = e.changedTouches[0].pageX
      const illustrationLength = this.data.illustrationList.length
      const windowWidth = wx.getSystemInfoSync().windowWidth

      if (Math.abs(illustrationTouchEndX - this.data.illustrationTouchStartX) > windowWidth / 4) {
        const newIndex = illustrationTouchEndX - this.data.illustrationTouchStartX > 0 ? this.data.illustrationIndex + 1 : this.data.illustrationIndex - 1

        this.setData({
          illustrationIndex: app.util.getImageSwipperIndex(newIndex, illustrationLength)
        })
      }
    } else if (e.changedTouches.length === 2) {
      // 双指缩放事件
    }

  },
  closeImage() {
    this.setData({
      showIllustration: false
    })
  }
})