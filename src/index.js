var Janosh = require('janosh.js')

module.exports = (function () {
    return function install(Vue, options) {
      var janosh = new Janosh(options.socketUri)
      Vue.janosh = janosh
      Object.defineProperty(Vue.prototype, '$janosh', { value: janosh })
    }
})();

