Component({
  properties: {
    source: {
      type: Object,
      value: {}
    }
  },
  data: {
    currentFastSelectionId: -1,
    currentDetailSelections: []
  },
  lifetimes: {
    ready() {
      const fastSelectionItem = this.properties.source.fastSelections.find(selection => {
        return selection.selected
      })
      this.data.currentFastSelectionId = fastSelectionItem ? fastSelectionItem.id : -1

      this.properties.source.selections.map(selection => {
        selection.selected && this.data.currentDetailSelections.push(selection.id)
      })

      this.triggerEvent('selectionchanged', this.data.currentDetailSelections)
    }
  },
  methods: {
    clickFastSelection(e) {
      const id = Number(e.target.id.match(new RegExp(/\d+/)))

      if (id === this.data.currentFastSelectionId) return

      let fastSelectionContent = []
      const fastSelectionItem = this.properties.source.fastSelections.map(selection => {
        selection.selected = false

        if (selection.id === id) {
          selection.selected = true
          fastSelectionContent = selection.content
        }
      })

      this.data.currentFastSelectionId = id
      this.data.currentDetailSelections = fastSelectionContent

      this.setData({
        source: Object.assign(this.data.source, {
          selections: this.data.source.selections.map(selection => {
            selection.selected = fastSelectionContent.includes(selection.id)
            return selection
          })
        })
      })

      this.triggerEvent('selectionchanged', fastSelectionContent)
    },
    clickDetailSelection(e) {
      const id = Number(e.target.id.match(new RegExp(/\d+/)))

      this.data.currentFastSelectionId = -1
      
      let currentSelections = []
      this.data.source.selections.map(selection => {
        if (selection.id === id) selection.selected = !selection.selected

        selection.selected && currentSelections.push(selection.id)
      })

      this.data.currentSelections = currentSelections

      this.setData({
        source: Object.assign(this.data.source, {
          fastSelections: this.data.source.fastSelections.map(selection => {
            selection.selected = false
            return selection
          })
        })
      })

      this.triggerEvent('selectionchanged', currentSelections)
    }
  }
})