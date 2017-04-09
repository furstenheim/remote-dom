const HTMLElementImpl = require('./HTMLElement-impl').implementation
const utils = require('./../../utils')

class HTMLScriptElementImpl extends HTMLElementImpl {

}

// TODO event
// TODO htmlFor

utils.defineRemoteProperties(HTMLScriptElementImpl.prototype, [
{"name":"src","type":"string","setter":true},
{"name":"type","type":"string","setter":true},
{"name":"charset","type":"string","setter":true},
{"name":"defer","type":"boolean","setter":true},
{"name":"crossOrigin","type":"string","setter":true},
{"name":"text","type":"string","setter":true},
{"name":"nonce","type":"string","setter":true}
])

module.exports = {
  implementation: HTMLScriptElementImpl
}