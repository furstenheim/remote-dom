const HTMLElementImpl = require('./HTMLElement-impl').implementation
const utils = require('./../../utils')

class HTMLStyleElementImpl extends HTMLElementImpl {

}
// TODO interface LinkStyle


utils.defineRemoteProperties(HTMLStyleElementImpl.prototype, [
{"name":"media","type":"string","setter":true},
{"name":"nonce","type":"string","setter":true},
{"name":"type","type":"string","setter":true}
])

module.exports = {
  implementation: HTMLStyleElementImpl
}