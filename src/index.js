var Janosh = require('janosh.js')

export default function () {
  return function install (Vue, options) {
    console.log(Janosh)
    var janosh = new Janosh(options.socketUri)

    Vue.janosh = janosh

    Object.defineProperties(Vue.prototype, {
      $janosh: {
        get: function () {
          return janosh
        }
      }
    })
  }
}
