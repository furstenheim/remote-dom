const HTMLElementImpl = require('./HTMLElement-impl').implementation
const utils = require('./../../utils')

class HTMLMetaElementImpl extends HTMLElementImpl {

}

// TODO scheme

utils.defineRemoteProperties(HTMLMetaElementImpl.prototype, [
{"name":"name","type":"string","setter":true},
{"name":"httpEquiv","type":"string","setter":true},
{"name":"content","type":"string","setter":true}
])

module.exports = {
  implementation: HTMLMetaElementImpl
}