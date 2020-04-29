const app = getApp()

import MIST_SKINS from '../../../../global/mistSkin'

Page({
  data: {
    id: 2,
    dataBackup: {},
    scriptTypes: [],
    currentScriptType: 0,
    toast: '',
    showChinese: true,

    baseInfo: {},
    scriptContent: {}
  },
  onLoad(options) {
    this.initData()
    this.setData({
      toast: '点击简介栏中的头像图可以查看完整立绘。'
    })
  },
  async initData() {
    const response = await app.http.get(app.http.GET_CQHY_SHIP_SCRIPT, {
      id: this.data.id
    })

    const data = response.data
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
    if (this.data.currentScriptType === 1) {
      this.data.baseInfo.skinName = this.data.showChinese ? MIST_SKINS[data.id].name.cn : MIST_SKINS[data.id].name.jp
      this.data.baseInfo.skinDesc = this.data.showChinese ? MIST_SKINS[data.id].desc.cn : MIST_SKINS[data.id].desc.jp
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
        break
      default:
        break
    }

    this.setData({
      baseInfo: this.data.baseInfo,
      scriptContent: this.data.scriptContent
    })
  }
})