class Base {
  constructor () {
    this.events = {}
  }
  on (evtName, callback) {
    this.events[evtName] = callback
  }
  trigger (evtName) {
    let func = this.events[evtName]
    if (typeof(func) === 'function') {
      func.apply(this, Array.prototype.splice.call(arguments, 1))
    }
  }
}

module.exports = Base