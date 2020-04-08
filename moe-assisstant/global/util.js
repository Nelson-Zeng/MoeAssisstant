import overrides from './overrides.js'

const drawPolygon = (ctx, pointArr, imgSrc, imgHeight) => {
  let picturePromise = new Promise((resolve, reject) => {
    wx.getImageInfo({
      src: imgSrc,
      success: response => {
        wx.compressImage({
          src: response.path,
          quality: (imgHeight / response.height * 100).floor(),
          success: response => {
            resolve(response.tempFilePath)
          }
        })
      }
    })
  })
  picturePromise.then(result => {
    for (const index in pointArr) {
      switch (parseInt(index)) {
        case 0:
          ctx.beginPath()
          ctx.moveTo(pointArr[index][0], pointArr[index][1])
          break
        case pointArr.length - 1:
          ctx.lineTo(pointArr[index][0], pointArr[index][1])
          ctx.closePath()
          break
        default:
          ctx.lineTo(pointArr[index][0], pointArr[index][1])
          break
      }
    }
    const imgPattern = ctx.createPattern(result, 'no-repeat')
    ctx.fillStyle = imgPattern
    ctx.fill()
  })
  return picturePromise
}

const drawTexts = (ctx, textObj) => {
  const fillColor = textObj.fillColor || '#FFFFFF'
  const strokeColor = textObj.strokeColor || '#000000'
  const fontSize = textObj.fontSize || 30

  ctx.setFontSize(fontSize)
  ctx.setFillStyle(fillColor)
  ctx.setStrokeStyle(strokeColor)
  textObj.texts.map(text => {
    if (text.direction === 'vertical')
      for (let index in text.content) {
        ctx.fillText(text.content[index], text.x, text.y + index * (fontSize + 10))
        ctx.strokeText(text.content[index], text.x, text.y + index * (fontSize + 10))
      }
    else {
      ctx.fillText(text.content, text.x, text.y)
      ctx.strokeText(text.content, text.x, text.y)
    }
  })
}

const checkPointInWhichPolygon = (point, polygons) => {
  let polygonIndex = 0
  polygons.map((polygon, index) => {
    // 判断点是否在多边形内部的方法是从该点延伸出一条射线并判断其与多边形相交的次数，基数次为内部，偶数次为外部
    let x = point[0],
      y = point[1];

    let inside = false;
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
      let xi = polygon[i][0],
        yi = polygon[i][1];
      let xj = polygon[j][0],
        yj = polygon[j][1];

      let intersect = ((yi > y) != (yj > y)) &&
        (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
      if (intersect) inside = !inside;
    }
    inside && (polygonIndex = index)
  })

  return polygonIndex + 1
}

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

export default Object.assign({
  drawPolygon,
  drawTexts,
  checkPointInWhichPolygon,
  getImageSwipperIndex
}, convertOverrideMethodsToUtilMethods())