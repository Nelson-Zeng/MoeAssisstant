const app = getApp()

Page({
  data: {
    fullList: [],
    tabList: [],

    dishList: []
  },
  async onLoad(options) {
    wx.showShareMenu({})

    const response = await app.http.get(app.http.GET_MENU_INFO)

    this.data.fullList = response.data

    let tabList = []
    this.data.fullList.map((item, index) => {
      !tabList.find(tab => {
        return tab.name.trim() === item.nationality.trim()
      }) && tabList.push({
        name: item.nationality,
        id: index + 1,
        key: index + 1
      })
    })

    tabList.unshift({
      name: '全部',
      id: 0,
      key: 0
    })

    this.setData({
      tabList: tabList,
      dishList: this.generateDishList('全部', this.data.fullList)
    })
  },
  selectedNationalityChanged(e) {
    const selectedNation = e.detail.currentItem.name

    this.setData({
      dishList: this.generateDishList(selectedNation, this.data.fullList.findAll(item => {
        return item.nationality === selectedNation
      }) || this.data.fullList)
    })
  },
  generateDishList(header, dataList) {
    return {
      title: header,
      headerItemList: ['名称', '国籍限制', '消耗', '效果', '持续时间（分钟）', '获取方式'],
      columnWidth: ['15%', '15%', '15%', '25%', '15%', '25%'],
      htmlContentList: dataList.map(data => {
        return [data.name, data.nationality, data.cost, data.effect, String(data.duration), data.access]
      })
    }
  }
})