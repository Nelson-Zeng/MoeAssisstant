const app = getApp()

Page({
  data: {
    timeList: [],
    dataLoaded: false,
    currentContent: [],
    tableStaticData: {}
  },
  async onLoad(options) {
    wx.showShareMenu({})

    const type = options.type ? Number(options.type) : 0
    switch (type) {
      case 0:
        this.data.tableStaticData = {
          title: '建造时间对照表',
          headerItemList: ['图鉴ID', '名称', '舰种', '需要时间'],
          columnWidth: ['20%', '20%', '25%', '35%'],
        }
        break
      case 1:
        this.data.tableStaticData = {
          title: '开发时间对照表',
          headerItemList: ['名称', '需要时间'],
          columnWidth: ['50%', '50%'],
        }
        break
    }

    const response = await app.http.get(app.http.GET_BUILDING_TIME, {
      id: type
    })

    this.data.timeList = []

    const data = response.data

    data.sort((a, b) => {
      return b.numbericTime - a.numbericTime
    })

    data.map(item => {
      let tempContent = []
      switch (type) {
        case 0:
          tempContent.push(item.dexIndex)
          tempContent.push(item.name)
          tempContent.push(item.shipClass)
          tempContent.push(item.stringifiedTime)
          break
        case 1:
          tempContent.push(item.name)
          tempContent.push(item.stringifiedTime)
          break
      }

      const temp = this.data.timeList.find(a => {
        return a.key === item.numbericTime
      })

      if (!temp) this.data.timeList.push({
        name: item.stringifiedTime,
        key: item.numbericTime,
        content: [
          tempContent
        ]
      })
      else temp.content.push(tempContent)
    })

    this.setData({
      timeList: this.data.timeList.map((item, index) => {
        item.id = index
        return item
      }),
      dataLoaded: true,
      currentContent: Object.assign(this.data.tableStaticData, {
        contentList: this.data.timeList[0].content
      })
    })
  },
  selectedTimeChanged(e) {
    this.setData({
      currentContent: Object.assign(this.data.tableStaticData, {
        contentList: e.detail.currentItem.content
      })
    })
  }
})