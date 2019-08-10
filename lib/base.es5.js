function Base() {}
Base.prototype.events = {}
Base.prototype.on = function (key, callback) {
  let _this = this
  this.events[key] = function () {
    return callback.apply(_this, arguments)
  }
}
Base.prototype.trigger = function (key, val) {
  this.events[key](val)
}
Base.extend = function (pro, static) {
  let baseInstance = new this()
  let Child = function () {}
  Child.extend = this.extend
  Object.assign(Child, static)
  Child.prototype = baseInstance
  Object.assign(Child.prototype, pro)
  return Child
}

module.exports = Base