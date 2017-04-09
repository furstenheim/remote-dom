const HTMLElementImpl = require('./HTMLElement-impl').implementation
const utils = require('./../../utils')

class HTMLSourceElementImpl extends HTMLElementImpl {

}

// TODO srcset
// TODO sizes
// TODO media

utils.defineRemoteProperties(HTMLSourceElementImpl.prototype, [
{"name":"src","type":"string","setter":true},
{"name":"type","type":"string","setter":true}
])

module.exports = {
  implementation: HTMLSourceElementImpl
}