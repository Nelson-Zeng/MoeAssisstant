import overrides from './overrides.js'

const convertOverrideMethodsToUtilMethods = () => {
  let temp = {}
  for (let key in overrides) { 
    temp[key] = overrides[key]
  }
  return temp
}

const getImageSwipperIndex = (currentIndex, fullLength) => {
  let index = currentIndex
  if (currentIndex < 0) {
    index = getImageSwipperIndex(currentIndex + fullLength, fullLength)
  } else if (currentIndex > fullLength - 1) {
    index = getImageSwipperIndex(currentIndex - fullLength, fullLength)
  }

  return index
}

function judgeFlagStatus() {
  const args = Array.prototype.slice.call(arguments)

  let flagCount = 0
  args.map(item => {
    flagCount += Number(Boolean(item))
  })

  return flagCount
}

export default Object.assign({
  getImageSwipperIndex,
  judgeFlagStatus
}, convertOverrideMethodsToUtilMethods())