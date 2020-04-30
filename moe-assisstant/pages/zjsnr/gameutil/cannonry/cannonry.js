const app = getApp()

const RANGES = [{
  title: '超长',
  id: 0
}, {
  title: '长',
  id: 1
}, {
  title: '短',
  id: 2
}, {
  title: '无',
  id: 3
}]

const CANNONRY_LIST = [{
  title: '一号位',
  selected: 0,
  id: 0,
  ranges: RANGES,
  column: 'firstPlace'
}, {
  title: '二号位',
  selected: 0,
  id: 1,
  ranges: RANGES,
  column: 'secondPlace'
}, {
  title: '三号位',
  selected: 0,
  id: 2,
  ranges: RANGES,
  column: 'thirdPlace'
}, {
  title: '四号位',
  selected: 0,
  id: 3,
  ranges: RANGES,
  column: 'fourthPlace'
}, {
  title: '五号位',
  selected: 0,
  id: 4,
  ranges: RANGES,
  column: 'fifthPlace'
}, {
  title: '六号位',
  selected: 0,
  id: 5,
  ranges: RANGES,
  column: 'sixthPlace'
}]

Page({
  data: {
    cannonryList: CANNONRY_LIST,
    order: ''
  },
  onLoad() {
    wx.showShareMenu({})
  },
  selectRange(e) {
    const id = e.currentTarget.id

    const ids = id.match(new RegExp(/^cannonry(\d*)range(\d*)$/))

    const connonryPositionId = Number(ids[1])
    const rangeId = Number(ids[2])

    this.data.cannonryList.find(cannonry => {
      return cannonry.id === connonryPositionId
    }).selected = rangeId

    this.setData({
      cannonryList: this.data.cannonryList
    })
  },
  async getOrder() {
    let params = {}
    this.data.cannonryList.map(cannonry => {
      params[cannonry.column] = cannonry.selected
    })

    const response = await app.http.get(app.http.GET_CANNONRY_ORDER, {}, params)
    
    this.setData({
      order: response.data ? response.data : '无当前情况的数据'
    })
  }
})