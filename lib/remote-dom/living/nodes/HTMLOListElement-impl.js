const HTMLElementImpl = require('./HTMLElement-impl').implementation
const utils = require('./../../utils')

class HTMLOListElementImpl extends HTMLElementImpl {

}

// TODO compact

utils.defineRemoteProperties(HTMLOListElementImpl.prototype, [
{"name":"reversed","type":"boolean","setter":true},
{"name":"start","type":"number","setter":true},
{"name":"type","type":"string","setter":true}
])

module.exports = {
  implementation: HTMLOListElementImpl
}