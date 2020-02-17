Number.prototype.floor = function () {
  return Math.floor(this)
}

Number.prototype.getFixed = function() {
  return Number(this.toFixed(3))
}