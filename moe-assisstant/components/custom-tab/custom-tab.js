Component({
  properties: {
    source: {
      type: Object,
      value: {}
    }
  },
  data: {
    expanded: false,
    selectedKey: ''
  },
  methods: {
    clickFirstClassItem(e) {
      if (this.data.expanded) return

      if (this.properties.source.secondary) {
        this.setData({
          expanded: true,
          selectedKey: this.properties.source.secondary[0].key
        })

        this.triggerEvent('selectKey', {
          key: this.properties.source.secondary[0].key,
          currentItem: this.properties.source.secondary[0],
          firstClassId: this.properties.source.id
        })
      } else {
        this.setData({
          selectedKey: this.properties.source.key
        })

        this.triggerEvent('selectKey', {
          key: this.properties.source.key,
          currentItem: this.properties.source,
          firstClassId: this.properties.source.id
        })
      }
    },
    clickSecondaryClassItem(e) {
      this.setData({
        selectedKey: Number(e.currentTarget.id)
      })

      this.triggerEvent('selectKey', {
        key: e.currentTarget.id,
        currentItem: this.properties.source.secondary.find(item => {
          return item.key === Number(e.currentTarget.id)
        }),
        firstClassId: this.properties.source.id
      })
    },
    foldContent() {
      this.setData({
        expanded: false
      })
    },
    clearFirstClassSelection() {
      this.setData({
        selectedKey: ''
      })
    },
    initSelectionStatus() {
      const selectedKey = this.properties.source.secondary ? this.properties.source.secondary[0].key : this.properties.source.key

      this.setData({
        expanded: true,
        selectedKey: selectedKey
      })
    }
  }
})