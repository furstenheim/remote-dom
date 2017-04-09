const HTMLElementImpl = require('./HTMLElement-impl').implementation
const utils = require('./../../utils')

class HTMLMenuElementImpl extends HTMLElementImpl {

}

// TODO compact

utils.defineRemoteProperties(HTMLMenuElementImpl.prototype, [
{"name":"type","type":"string","setter":true},
{"name":"label","type":"string","setter":true}
])

module.exports = {
  implementation: HTMLMenuElementImpl
}