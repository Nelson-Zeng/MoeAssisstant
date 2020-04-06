Component({
  properties: {
    tabs: {
      type: Array,
      value: []
    },
    peaces: {
      type: Number,
      value: 0
    }
  },
  data: {
    selectedTab: 0
  },
  methods: {
    selectTab(e) {
      const id = Number(e.currentTarget.id)

      this.setData({
        selectedTab: id
      })

      this.triggerEvent('TabClick', { itemId: id})
    }
  }
})