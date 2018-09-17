var Janosh = require('janosh.js');

module.exports = (function () {

    return function install(Vue, options) {

        var janosh = new Janosh(options.socketUri);  
    
        Vue.janosh = janosh;

        Object.defineProperties(Vue.prototype, {
            $janosh: {
                get: function () {
                    return janosh;
                }
            }
        });
    }
})();