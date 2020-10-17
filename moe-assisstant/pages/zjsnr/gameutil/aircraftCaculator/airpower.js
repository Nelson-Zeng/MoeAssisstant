const app = getApp()

Page({
  data: {
    aircrafts: [],
    showShipSelection: false,
    shipTypeOptions: [{
        id: app.constants.ANTIAIRCRAFT_SHIP_TYPES.nomal,
        name: '航母/装母/轻母'
      },
      {
        id: app.constants.ANTIAIRCRAFT_SHIP_TYPES.special,
        name: '航战/航巡'
      }
    ],
    shipTypeKey: 0,
    shipPower: 30,
    flightAntiValues: ['14', '0', '0', '0'],
    enemyInfo: [{
      value: 0
    }]
  },
  selectedIndex: [],
  counts: [],
  antiValue: [],
  onLoad(options) {
    for (let i = 1; i <= 18; i++) {
      this.antiValue.push(i)
    }
    for (let i = 1; i <= 48; i++) {
      this.counts.push(i)
    }
    const localstorage = wx.getStorageSync('flights')
    if (localstorage) {
      this.data.aircrafts = JSON.parse(JSON.stringify(localstorage))
      this.setData({
        aircrafts: this.data.aircrafts
      })
    }

    if (this.data.aircrafts.length === 0) this.setData({
      showShipSelection: true
    })

    const {enemy} = options
    if (enemy) {
      const enemyInfo = JSON.parse(enemy)
      this.data.enemyInfo = enemyInfo.map(enemy => {return {value: enemy}})
      this.setData({
        enemyInfo: this.data.enemyInfo
      })
    }
  },
  onAddClick() {
    this.setData({
      showShipSelection: true
    })
  },
  onRemoveClick() {
    this.data.aircrafts.pop()
    this.setData({
      aircrafts: this.data.aircrafts
    })
  },
  onCountInput(e) {
    const {index} = e.currentTarget.dataset
    const arr = index.split(',')
    const {value} = e.detail

    this.data.aircrafts[arr[0]][arr[1]].count = value
    this.setData({
      aircrafts: this.data.aircrafts
    })
  },
  onValueInput() {
    const {index} = e.currentTarget.dataset
    const arr = index.split(',')
    const {value} = e.detail

    this.data.aircrafts[arr[0]][arr[1]].value = value
    this.setData({
      aircrafts: this.data.aircrafts
    })
  },
  onShipTypeSelected(e) {
    const {
      value
    } = e.detail;

    this.setData({
      shipTypeKey: value
    })
  },
  onPowerCancelClick() {
    if (this.data.aircrafts.length === 0) {
      wx.showToast({
        title: '至少加入一艘战船',
        icon: 'none'
      })
      return
    }

    this.setData({
      showShipSelection: false
    }, () => {
      this.cleanDialogData()
    })
  },
  onPowerConfirmClick() {
    if (!this.data.shipPower) {
      wx.showToast({
        title: '火力不能为零',
        icon: 'none'
      })
      return
    }

    let flag = 0
    this.data.flightAntiValues.map(item => {
      flag += !Number(item)
    })
    if (flag === 4) {
      wx.showToast({
        title: '请至少输入一条飞机的对空值',
        icon: 'none'
      })
      return
    }

    let carries = 0
    switch (Number(this.data.shipTypeKey)) {
      case app.constants.ANTIAIRCRAFT_SHIP_TYPES.nomal:
        carries = Math.floor(this.data.shipPower / 5 + 3)
        break
      case app.constants.ANTIAIRCRAFT_SHIP_TYPES.special:
        carries = Math.floor(this.data.shipPower / 10 + 3)
        break
      default:
        return
    }
    const baseList = []
    for (let i = 0; i < 4; i++) {
      const baseItem = {
        count: Number(this.data.flightAntiValues[i]) ? carries : 0,
        value: this.data.flightAntiValues[i]
      }
      baseList.push({...baseItem})
    }
    this.data.aircrafts.push(JSON.parse(JSON.stringify(baseList)))
    this.setData({
      aircrafts: this.data.aircrafts,
      showShipSelection: false
    }, () => {
      this.cleanDialogData()
    })
  },
  cleanDialogData() {
    this.setData({
      shipTypeKey: 0,
      shipPower: 30,
      flightAntiValues: ['14', '0', '0', '0']
    })
  },
  onShipPowerInput(e) {
    const {
      value
    } = e.detail

    this.setData({
      shipPower: value
    })
  },
  onAntiValueInput(e) {
    const {
      index
    } = e.currentTarget.dataset
    const {
      value
    } = e.detail

    this.data.flightAntiValues[index] = value

    this.setData({
      flightAntiValues: this.data.flightAntiValues
    })
  },
  onEnemyRemoved(e) {
    const {
      index
    } = e.currentTarget.dataset
    this.data.enemyInfo.splice(index, 1)
    this.setData({
      enemyInfo: this.data.enemyInfo
    })
  },
  onEnemyAdded() {
    this.data.enemyInfo.push({value: 0})
    this.setData({
      enemyInfo: this.data.enemyInfo
    })
  },
  onEnemyInput(e) {
    const {
      index
    } = e.currentTarget.dataset
    const {
      value
    } = e.detail
    this.data.enemyInfo[index] = Object.assign(this.data.enemyInfo[index], {
      value
    })
    this.setData({
      enemyInfo: this.data.enemyInfo
    })
  },
  onCaculatingClick() {
    let fullValue = 0
    this.data.aircrafts.map(ship => {
      ship.map(waku => {
        const result = this.getSingleValue(waku.count, waku.value)
        fullValue += result
      })
    })
    
    this.data.enemyInfo = this.data.enemyInfo.map(enemy => {
      const scale = fullValue / Number(enemy.value)
      if (scale > 3) enemy.color = '#67C23A'
      else if (scale > 1.5) enemy.color = '#409EFF'
      else if (scale > 1/3) enemy.color = '#E6A23C'
      else enemy.color = '#F56C6C'
      return enemy
    })

    this.setData({
      enemyInfo: this.data.enemyInfo
    })

    wx.setStorage({
      data: JSON.parse(JSON.stringify(this.data.aircrafts)),
      key: 'flights',
    })
  },
  getSingleValue(count, anti) {
    if (count === 0) return 0

    return Math.log(2 * (count + 1)) * anti
  }
})