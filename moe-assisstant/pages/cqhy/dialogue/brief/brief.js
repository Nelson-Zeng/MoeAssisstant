const app = getApp()
import MIST_MEMBERS from '../../../../global/mistCharacters'

Page({
  data: {
    memberList: [],
    thumbnailRadius: '100px',

    showChinese: app.globalData.showChinese
  },
  onLoad() {
    wx.showShareMenu({})

    this.setData({
      memberList: MIST_MEMBERS.map(member => {
        member.src = app.filters.getMISTThumbnail(member.id)
        return member
      })
    })

    wx.nextTick(() => {
      const query = wx.createSelectorQuery()

      query.select('#member1').fields({
        computedStyle: ['width']
      }, res => {
        this.setData({
          thumbnailRadius: res.width
        })
      }).exec()
    })
  },
  changeLanguage(e) {
    app.globalData.showChinese = e.detail.value

    this.setData({
      showChinese: e.detail.value
    })
  },
  checkForDetail(e) {
    const id = Number(e.currentTarget.id.split('member')[1])

    app.util.navigateTo('/pages/cqhy/dialogue/detail/detail', {
      id: id
    })
  }
})