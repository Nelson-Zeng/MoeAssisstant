const app = getApp()

const EXPEDITION_CHAPTERS = [{
  id: 0,
  name: '第一章',
  key: 1
}, {
  id: 1,
  name: '第二章',
  key: 2
}, {
  id: 2,
  name: '第三章',
  key: 3
}, {
  id: 3,
  name: '第四章',
  key: 4
}, {
  id: 4,
  name: '第五章',
  key: 5
}, {
  id: 5,
  name: '第六章',
  key: 6
}, {
  id: 6,
  name: '第七章',
  key: 7
}, {
  id: 7,
  name: '第八章',
  key: 8
}]

Page({
  data: {
    expeditionChapter: EXPEDITION_CHAPTERS,
    currentExpeditionChapter: EXPEDITION_CHAPTERS[0],

    expeditionList: [],
    currentExpeditionList: [],
    tableWidthDistribution: ['16%', '16%', '16%', '16%', '16%', '20%']
  },
  async onLoad() {
    wx.showShareMenu({})

    const response = await app.http.get(app.http.GET_EXPEDITIONS)

    let oilList = [],
      ammoList = [],
      steelList = [],
      aluminiumList = []

    this.data.expeditionList = response.data.map(expedition => {
      let tempColorSet = ['', '', '', '', '', '']
      if (expedition.oil) {
        oilList.push({
          id: expedition.id,
          value: expedition.oilefficiency
        })

        if (Number(expedition.oilefficiency) > 1) tempColorSet[0] = '#409EFF'
      }

      if (expedition.ammo) {
        ammoList.push({
          id: expedition.id,
          value: expedition.ammoefficiency
        })

        if (Number(expedition.ammoefficiency) > 1) tempColorSet[1] = '#409EFF'
      }
      if (expedition.steel) {
        steelList.push({
          id: expedition.id,
          value: expedition.steelefficiency
        })

        if (Number(expedition.steelefficiency) > 1) tempColorSet[2] = '#409EFF'
      }
      if (expedition.aluminium) {
        aluminiumList.push({
          id: expedition.id,
          value: expedition.aluminiumefficiency
        })

        if (Number(expedition.aluminiumefficiency) > 1) tempColorSet[3] = '#409EFF'
      }

      expedition.tempColorSet = tempColorSet
      return expedition
    })

    const mostEfficientOilId = oilList.sort((a, b) => {
      return Number(b.value) - Number(a.value)
    })[0].id
    const mostEfficientAmmoId = ammoList.sort((a, b) => {
      return Number(b.value) - Number(a.value)
    })[0].id
    const mostEfficientSteelId = steelList.sort((a, b) => {
      return Number(b.value) - Number(a.value)
    })[0].id
    const mostEfficientAluminiumId = aluminiumList.sort((a, b) => {
      return Number(b.value) - Number(a.value)
    })[0].id

    this.data.expeditionList = this.data.expeditionList.map(expedition => {
      switch (expedition.id) {
        case mostEfficientOilId:
          expedition.tempColorSet[0] = '#67C23A'
          break
        case mostEfficientAmmoId:
          expedition.tempColorSet[1] = '#67C23A'
          break
        case mostEfficientSteelId:
          expedition.tempColorSet[2] = '#67C23A'
          break
        case mostEfficientAluminiumId:
          expedition.tempColorSet[3] = '#67C23A'
          break
      }

      expedition.tableContent = {
        title: expedition.name,
        headerItemList: ['油', '弹', '钢', '铝', '持续时间', '特殊掉落'],
        contentList: [
          [expedition.oil ? expedition.oil : '无', expedition.ammo ? expedition.ammo : '无', expedition.steel ? expedition.steel : '无', expedition.aluminium ? expedition.aluminium : '无', expedition.timespend, expedition.special ? expedition.special : '无']
        ],
        contentColorSet: expedition.tempColorSet
      }
      expedition.tableContentTwo = {
        headerItemList: ['油效', '弹效', '钢效', '铝效', '持续时间（分钟）', '需求条件'],
        contentList: [
          [expedition.oilefficiency ? expedition.oilefficiency : '无', expedition.ammoefficiency ? expedition.ammoefficiency : '无', expedition.steelefficiency ? expedition.steelefficiency : '无', expedition.aluminiumefficiency ? expedition.aluminiumefficiency : '无', expedition.time, expedition.requirement ? expedition.requirement : '无']
        ],
        contentColorSet: expedition.tempColorSet
      }

      return expedition
    })

    this.filterData()
  },
  filterData() {
    this.setData({
      currentExpeditionList: this.data.expeditionList.findAll(item => {
        return item.episode === this.data.currentExpeditionChapter.name
      })
    })
  },
  selectedCharpterChanged(e) {
    this.setData({
      currentExpeditionChapter: e.detail.currentItem
    })

    this.filterData()
  }
})