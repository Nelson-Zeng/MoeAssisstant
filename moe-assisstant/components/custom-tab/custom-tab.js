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
          firstClassId: this.properties.source.id
        })
      } else {
        this.setData({
          selectedKey: this.properties.source.key
        })

        this.triggerEvent('selectKey', {
          key: this.properties.source.key,
          firstClassId: this.properties.source.id
        })
      }
    },
    clickSecondaryClassItem(e) {
      this.setData({
        selectedKey: e.currentTarget.id
      })

      this.triggerEvent('selectKey', {
        key: e.currentTarget.id,
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
      this.setData({
        expanded: true,
        selectedKey: this.properties.source.secondary[0].key
      })
    }
  }
})