const app = getApp()

Page({
  data: {
    showTypeSelection: false,
    shipTypes: [{
        id: 1,
        types: [{
            id: 12
          },
          {
            id: 23
          },
          {
            id: 24
          },
          {
            id: 14
          },
          {
            id: 15
          },
          {
            id: 16
          },
          {
            id: 11
          }
        ]
      },
      {
        id: 2,
        types: [{
            id: 2
          },
          {
            id: 10
          },
          {
            id: 7
          },
          {
            id: 9
          },
          {
            id: 8
          }
        ]
      },
      {
        id: 3,
        types: [{
            id: 4
          },
          {
            id: 1
          },
          {
            id: 6
          },
          {
            id: 3
          },
          {
            id: 5
          },
          {
            id: 27
          },
          {
            id: 26
          }
        ]
      }
    ]
  },
  fullSetting: [],
  async onLoad() {
    // 先读本地缓存，如无缓存则发送网络请求获取配置。若有缓存则静默读取远程配置与本地配置进行比对，如果出现不一样的情况则弹出通知并更新缓存，刷新页面
    wx.showLoading({
      title: '正在载入配置',
    })
    const localSetting = wx.getStorageSync('talentTree')
    wx.hideLoading()
    if (!localSetting) {
      wx.showLoading({
        title: '正在获取配置',
      })
      const setting = await app.http.get(`${app.constants.DOMAIN}/zjsnr/talentTree/talentTree.json`)
      this.fullSetting = JSON.parse(JSON.stringify(setting.data))
      wx.hideLoading()
      this.initData()
      wx.setStorage({
        data: JSON.parse(JSON.stringify(this.fullSetting)),
        key: 'talentTree',
      })
    } else {
      this.fullSetting = JSON.parse(JSON.stringify(localSetting))
      this.initData()
      const setting = await app.http.get(`${app.constants.DOMAIN}/zjsnr/talentTree/talentTree.json`)
      const remoteSetting = setting.data
      if (JSON.stringify(remoteSetting) !== JSON.stringify(localSetting)) {
        wx.setStorageSync('talentTree', JSON.parse(JSON.stringify(remoteSetting)))
        wx.showToast({
          title: '系统检测到工程局数据出现了变化，将在五秒钟后刷新本页面',
          icon: 'none',
          duration: 5000,
          success() {
            setTimeout(() => {
              wx.redirectTo({
                url: '/pages/zjsnr/gameutil/gift/giftTree',
              })
            }, 5000)
          }
        })
      }
    }
  },
  initData() {}
})