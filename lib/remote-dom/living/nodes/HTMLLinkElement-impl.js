const HTMLElementImpl = require('./HTMLElement-impl').implementation
const utils = require('./../../utils')

class HTMLLinkElementImpl extends HTMLElementImpl {

}
// TODO interface LinkStyle

// TODO charset
// TODO rev
// TODO target

utils.defineRemoteProperties(HTMLLinkElementImpl.prototype, [
{"name":"href","type":"string","setter":true},
{"name":"crossOrigin","type":"string","setter":true},
{"name":"rel","type":"string","setter":true},
{"name":"media","type":"string","setter":true},
{"name":"hreflang","type":"string","setter":true},
{"name":"type","type":"string","setter":true}
])

module.exports = {
  implementation: HTMLLinkElementImpl
}