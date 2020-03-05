Number.prototype.floor = function () {
  return Math.floor(this)
}

Number.prototype.getFixed = function() {
  return Number(this.toFixed(3))
}

Array.prototype.findAll = function(condition) {
  let temp = []
  this.map(item => {
    if (condition(item)) temp.push(item)
  })

  return temp
}