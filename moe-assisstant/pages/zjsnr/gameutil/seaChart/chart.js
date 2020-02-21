const ID_MAPPING = {
  0: '第一章',
  1: '第二章',
  2: '第三章',
  3: '第四章',
  4: '第五章',
  5: '第六章',
  6: '第七章',
  7: '第八章'
}

class chart {
  constructor(index, optionNames) {
    this.id = index
    this.name = ID_MAPPING[index]
    this.secondaryMenu = optionNames.map((option, indexS) => {
      let tempItem = {}
      tempItem.id = `${index + 1}-${indexS + 1}`
      tempItem.name = `${tempItem.id}/${option}`
      tempItem.src = `cloud://moe-assisstant-hviue.6d6f-moe-assisstant-hviue-1301021771/zjsn/seaChart/${tempItem.id}.png`
      return tempItem
    })
  }
}

export default chart