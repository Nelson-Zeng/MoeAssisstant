const app = getApp()

Component({
  properties: {
    itemSet: {
      type: Array,
      value: []
    },
    customWidth: {
      type: String,
      value: '40vw'
    }
  },
  lifetimes: {
    attached() {
      this.selectComponent(`#tab0`).initSelectionStatus()
    }
  },
  methods: {
    selectKeyChanged(e) {
      const currentId = e.detail.firstClassId

      this.data.itemSet.map(item => {
        if (item.id !== currentId) {
          const component = this.selectComponent(`#tab${item.id}`)
          component.foldContent()
          component.clearFirstClassSelection()
        }
      })

      this.triggerEvent('itemSelected', e.detail)
    }
  }
})