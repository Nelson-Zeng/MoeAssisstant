const app = getApp()

import seachart from './chart.js'

const OPTIONS = [
  ['母港附近海域', '东北防线海域', '仁州附近海域', '深海仁州基地', '乌兰○托附近水域'],
  ['扶桑西部海域', '扶桑西南海域', '扶桑南部海域', '扶桑深海基地', '深海前哨站核心地区', '深海前哨站北方地区'],
  ['母港南部海域', '东南群岛(1)', '东南群岛(2)', '星洲海峡'],
  ['克拉代夫东部海域', '克拉代夫西部海域', '泪之扉附近海域', '泪之扉防线'],
  ['塞浦路斯附近海域', '克里特附近海域', '马耳他附近海域', '直布罗陀东部海域', '直布罗陀要塞'],
  ['洛里昂南部海域', '英吉利海峡', '斯卡帕湾', '丹麦海峡'],
  ['比斯开湾', '马德拉海域', '亚速尔海域', '百慕大三角附近海域', '百慕大三角防波提'],
  ['百慕大中心海域', '百慕大南群岛']
]

Page({
  data: {
    seaAreas: [],
    selectedArea: 0,
    selectedChapterArea: {},

    showBigMap: false,
    currentSrc: '',

    showDrop: false,
    dropListTable: {}
  },
  async onLoad() {
    const settingData = await app.http.get(app.http.GET_SEA_CHART_INFO, {}, {})

    const temp = OPTIONS.map((option, index) => {
      return new seachart(index, option, settingData.data)
    })

    this.setData({
      seaAreas: temp,
      selectedChapterArea: temp[0]
    })
  },
  selectAreaChapter(e) {
    const id = Number(e.currentTarget.id.split('areaChapter')[1])

    this.setData({
      selectedArea: id,
      selectedChapterArea: this.data.seaAreas.find(area => {
        return area.id === id
      })
    })
  },
  showDetail(e) {
    this.setData({
      showBigMap: true,
      currentSrc: e.currentTarget.id.split('image')[1]
    })
  },
  clickOutside(e) {
    this.setData({
      showBigMap: false,
      showDrop: false
    })
  },
  clickInside() {
    return
  },
  clickDetail(e) {
    let currentMap = this.data.selectedChapterArea.secondaryMenu.find(area => {
      return area.id === e.currentTarget.dataset.area.id
    })

    currentMap.expanded = !currentMap.expanded

    this.setData({
      selectedChapterArea: this.data.selectedChapterArea
    })
  },
  async checkDrop(e) {
    wx.showLoading({
      title: '正在请求数据'
    })

    const nodes = e.currentTarget.dataset.node.split(' ')
    const result = await app.http.get(app.http.GET_NODE_DROP_INFO, {}, {
      map: nodes[0],
      point: nodes[1]
    })

    this.data.dropListTable = {
      title: `${nodes[0]}${nodes[1]}点掉落记录`,
      headerItemList: ['名称', '掉落数', '攻略数', '出货概率'],
      columnWidth: ['25%', '25%', '25%', '25%'],
      contentList: result.data.map(item => {
        let temp = []
        temp.push(item.name, item.C, item.C_node, (item.C / item.C_node).getFixed())
        return temp
      })
    }

    wx.hideLoading()

    this.setData({
      dropListTable: this.data.dropListTable,
      showDrop: true
    })
  }
})