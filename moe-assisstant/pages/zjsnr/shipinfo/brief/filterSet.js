class FilterSet {
  constructor(setTitle, fastSelections, selections, currentSelections) {
    this.title = setTitle

    const selectAllContent = []
    this.selections = selections.map((select, index) => {
      selectAllContent.push(index)
      select.selected = currentSelections ? currentSelections.includes(select.id) : true
      return select
    })

    if (fastSelections) {
      this.fastSelections = []
      fastSelections.map((selectionSet, index) => {
        let temp = {
          id: index,
          title: selectionSet.title,
          content: index === 0 ? selectAllContent : selectionSet.content,
        }
        temp.selected = currentSelections ? currentSelections.sort().toString() === temp.content.sort().toString() : index === 0
        this.fastSelections.push(temp)
      })
    }
  }
}

export default FilterSet