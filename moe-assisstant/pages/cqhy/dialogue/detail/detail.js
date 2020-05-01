const app = getApp()

import MIST_SKINS from '../../../../global/mistSkin'
import MIST_MEMBERS from '../../../../global/mistCharacters'

Page({
  data: {
    id: 2,
    dataBackup: {},
    scriptTypes: [],
    currentScriptType: 0,
    toast: '',
    showChinese: app.globalData.showChinese,

    baseInfo: {},
    scriptContent: {},
    showFullIllustration: false,
    fullHDSrcs: [],
    currentIllustrationSrc: '',
    currentPicId: 0,
    reactionScriptContent: [],

    dataError: false,

    longPressStart: false,
    startPointPosition: {},
    gesturePosition: {},
    arrowPosition: {},
    gestureSrc: '/public/gesture.svg',
    showGesture: false,
    showLeftPointingArrow: false,
    showRightPointingArrow: false,

    loginThenable: null
  },
  onLoad(options) {
    options && options.id && (this.data.id = Number(options.id))
    this.data.showChinese = app.globalData.showChinese

    this.data.loginThenable = {
      then: () => {
        this.setData({
          toast: '点击简介栏中的头像图可以查看完整立绘。'
        })
      }
    }

    wx.showShareMenu({})

    this.initData()
    this.setData({
      showChinese: this.data.showChinese
    })
  },
  async initData() {
    this.data.scriptTypes = []

    const response = await app.http.get(app.http.GET_CQHY_SHIP_SCRIPT, {
      id: this.data.id
    })

    const data = response.data

    if (data.errCode == 999) {
      this.setData({
        dataError: true
      })
      return
    }
    this.data.dataBackup = Object.assign({}, response.data)

    data.cn.personalScripts.length > 0 && this.data.scriptTypes.push({
      id: 0,
      name: '默认台词'
    })

    data.cn.skinScripts.length > 0 && this.data.scriptTypes.push({
      id: 1,
      name: '皮肤台词'
    })

    data.cn.reactionScriptGroups.length > 0 && this.data.scriptTypes.push({
      id: 2,
      name: '交互台词'
    })

    this.setData({
      scriptTypes: this.data.scriptTypes
    })

    wx.nextTick(() => {
      this.initPageInfo()
      this.data.loginThenable && Promise.resolve(this.data.loginThenable)
    })
  },
  selectScript(e) {
    this.data.currentScriptType = e.detail.itemId

    this.setData({
      currentScriptType: this.data.currentScriptType
    })
    wx.nextTick(() => {
      this.initPageInfo()
    })
  },
  changeLanguage(e) {
    this.data.showChinese = e.detail.value
    app.globalData.showChinese = e.detail.value

    this.initPageInfo()
  },
  initPageInfo() {
    const data = this.data.showChinese ? this.data.dataBackup.cn : this.data.dataBackup.jp

    this.data.baseInfo = this.data.showChinese ? {
      dexIndexTitle: '图鉴ID',
      nameTitle: '舰名',
      skinTitle: '皮肤名',
      skinDescTitle: '皮肤描述',
      languageTitle: '显示语言'
    } : {
        dexIndexTitle: '図鑑ID',
        nameTitle: '名前',
        skinTitle: 'コスチューム',
        skinDescTitle: 'コスチューム紹介',
        languageTitle: '言語選択'
      }

    this.data.baseInfo.dexIndex = data.id
    this.data.baseInfo.name = data.name
    this.data.baseInfo.currentSrc = app.filters.getMISTMiddlePicture(data.id)
    this.data.currentPicId = data.id
    if (this.data.currentScriptType === 1) {
      this.data.baseInfo.skinName = this.data.showChinese ? MIST_SKINS[data.id].name.cn : MIST_SKINS[data.id].name.jp
      this.data.baseInfo.skinDesc = this.data.showChinese ? MIST_SKINS[data.id].desc.cn : MIST_SKINS[data.id].desc.jp

      let tumbnailId = String(data.id)
      if (tumbnailId.length < 2) tumbnailId = `10000${tumbnailId}`
      else if (tumbnailId.length < 3) tumbnailId = `1000${tumbnailId}`
      else tumbnailId = `100${tumbnailId}`
      this.data.currentPicId = Number(tumbnailId)
      this.data.baseInfo.currentSrc = app.filters.getMISTMiddlePicture(Number(tumbnailId))
    }

    let baseTable
    switch (this.data.currentScriptType) {
      case 0:
        baseTable = this.data.showChinese ? app.constants.MIST_SCRIPT_TABLE_SETTING.cn : app.constants.MIST_SCRIPT_TABLE_SETTING.jp

        this.data.scriptContent = Object.assign(baseTable, {
          contentList: data.personalScripts.map(item => {
            return [item.type, item.limitation, item.content]
          })
        })
        break
      case 1:
        baseTable = this.data.showChinese ? app.constants.MIST_SCRIPT_TABLE_SETTING.cn : app.constants.MIST_SCRIPT_TABLE_SETTING.jp

        this.data.scriptContent = Object.assign(baseTable, {
          contentList: data.skinScripts.map(item => {
            return [item.type, item.limitation, item.content]
          })
        })
        break
      case 2:
        let reactionScripts = []
        reactionScripts = data.reactionScriptGroups.map((item, index) => {
          const tempItem = item.map(script => {
            script.src = app.filters.getMISTThumbnail(script.speakerId)
            return script
          })
          return {
            title: `${item[0].speakerName} => ${item[1].speakerName}`,
            group: tempItem
          }
        })
        this.data.scriptContent = reactionScripts
        break
      default:
        break
    }

    this.setData({
      baseInfo: this.data.baseInfo,
      scriptContent: this.data.scriptContent
    })
  },
  checkDetailIllustration() {
    this.data.fullHDSrcs = app.filters.getMISTFullHDPictures(this.data.currentPicId)

    this.setData({
      showFullIllustration: true,
      currentIllustrationSrc: this.data.fullHDSrcs[0]
    })
  },
  closeIllustrationContainer() {
    this.setData({
      showFullIllustration: false
    })
  },
  emptyFunc() {
    return
  },
  prevImage() {
    let currentIndex
    this.data.fullHDSrcs.map((item, index) => {
      item === this.data.currentIllustrationSrc && (currentIndex = index)
    })
    const newIndex = Math.abs((currentIndex - 1) % 2)

    this.setData({
      currentIllustrationSrc: this.data.fullHDSrcs[newIndex]
    })
  },
  nextImage() {
    let currentIndex
    this.data.fullHDSrcs.map((item, index) => {
      item === this.data.currentIllustrationSrc && (currentIndex = index)
    })
    const newIndex = Math.abs((currentIndex + 1) % 2)

    this.setData({
      currentIllustrationSrc: this.data.fullHDSrcs[newIndex]
    })
  },
  goNext() {
    let currentIndex = 0
    MIST_MEMBERS.map((member, index) => {
      if (member.id === Number(this.data.id)) currentIndex = index
    })

    if (currentIndex === MIST_MEMBERS.length - 1) {
      app.util.toast.info('前方不通。')
      return
    }

    this.data.id = MIST_MEMBERS[currentIndex + 1].id

    this.selectComponent('#headerTap') && this.selectComponent('#headerTap').selectTab({
      currentTarget: {
        id: 0
      }
    })
    this.setData({
      currentScriptType: 0,
      dataError: false
    })

    this.initData()
  },
  goPre() {
    let currentIndex = 0
    MIST_MEMBERS.map((member, index) => {
      if (member.id === Number(this.data.id)) currentIndex = index
    })

    if (!currentIndex) {
      app.util.toast.info('前方不通。')
      return
    }

    this.data.id = MIST_MEMBERS[currentIndex - 1].id

    this.selectComponent('#headerTap') && this.selectComponent('#headerTap').selectTab({
      currentTarget: {
        id: 0
      }
    })
    this.setData({
      currentScriptType: 0,
      dataError: false
    })

    this.initData()
  },
  stopTouch(e) {
    if (this.data.showLeftPointingArrow)
      wx.nextTick(() => {
        this.goPre()
      })
    else if (this.data.showRightPointingArrow)
      wx.nextTick(() => {
        this.goNext()
      })

    this.setData({
      longPressStart: false,
      startPointPosition: {},
      gesturePosition: {},
      arrowPosition: {},
      gestureSrc: '/public/gesture.svg',
      showGesture: false,
      showLeftPointingArrow: false,
      showRightPointingArrow: false
    })
  },
  touchMoving(e) {
    const currentLeft = parseInt(e.touches[0].pageX)

    if (!this.data.longPressStart) return

    const offsetDistance = currentLeft - parseInt(this.data.startPointPosition.left)
    const movingDistance = Math.abs(offsetDistance)
    const boundaryDistance = 80

    if (offsetDistance < 0) {
      if (movingDistance > boundaryDistance) this.setData({
        showGesture: false,
        showLeftPointingArrow: true,
        showRightPointingArrow: false,
        arrowPosition: {
          top: `${parseInt(this.data.startPointPosition.top) - 100}px`,
          left: `${currentLeft - 60}px`
        }
      })
      else this.setData({
        showGesture: true,
        showLeftPointingArrow: false,
        showRightPointingArrow: false,
        gesturePosition: Object.assign(this.data.gesturePosition, {
          left: `${Number(currentLeft) - 90}px`
        })
      })
    } else {
      if (movingDistance > boundaryDistance) this.setData({
        showGesture: false,
        showLeftPointingArrow: false,
        showRightPointingArrow: true,
        arrowPosition: {
          top: `${parseInt(this.data.startPointPosition.top) - 100}px`,
          left: `${Number(currentLeft) - 60}px`
        }
      })
      else this.setData({
        showGesture: true,
        showLeftPointingArrow: false,
        showRightPointingArrow: false,
        gesturePosition: Object.assign(this.data.gesturePosition, {
          left: `${Number(currentLeft) - 90}px`
        })
      })
    }
  },
  startLongPress(e) {
    this.setData({
      longPressStart: true,
      showGesture: true,
      gesturePosition: {
        top: `${Number(e.detail.y - 170)}px`,
        left: `${Number(e.detail.x - 90)}px`
      },
      startPointPosition: {
        top: `${Number(e.detail.y) - 15}px`,
        left: `${Number(e.detail.x) - 15}px`
      }
    })
  }
})