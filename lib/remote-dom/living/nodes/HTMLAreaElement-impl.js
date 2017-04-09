const HTMLElementImpl = require('./HTMLElement-impl').implementation
const utils = require('./../../utils')

class HTMLAreaElementImpl extends HTMLElementImpl {

}
// TODO interface HTMLHyperlinkElementUtils

// TODO noHref

utils.defineRemoteProperties(HTMLAreaElementImpl.prototype, [
{"name":"alt","type":"string","setter":true},
{"name":"coords","type":"string","setter":true},
{"name":"shape","type":"string","setter":true},
{"name":"target","type":"string","setter":true},
{"name":"rel","type":"string","setter":true}
])

module.exports = {
  implementation: HTMLAreaElementImpl
}