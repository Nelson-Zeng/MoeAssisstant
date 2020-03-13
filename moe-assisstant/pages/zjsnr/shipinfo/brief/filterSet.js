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
        let content
        if (index === 0) content = selectAllContent
        else if (index === 1) content = []
        else content = selectionSet.content
        let temp = {
          id: index,
          title: selectionSet.title,
          content: content,
        }
        temp.selected = currentSelections ? currentSelections.equals(temp.content) : index === 0
        this.fastSelections.push(temp)
      })
    }
  }
}

export default FilterSet