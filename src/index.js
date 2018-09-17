var Janosh = require('janosh.js')

export default {
  install (Vue, options) {
    var janosh = new Janosh(options.socketUri)
    Vue.janosh = janosh
    Object.defineProperty(Vue.prototype, '$janosh', { value: janosh })
  }
}
