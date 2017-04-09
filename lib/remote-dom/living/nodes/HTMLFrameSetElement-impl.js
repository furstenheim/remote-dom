const HTMLElementImpl = require('./HTMLElement-impl').implementation
const utils = require('./../../utils')

class HTMLFrameSetElementImpl extends HTMLElementImpl {

}
// TODO interface WindowEventHandlers


utils.defineRemoteProperties(HTMLFrameSetElementImpl.prototype, [
{"name":"cols","type":"string","setter":true},
{"name":"rows","type":"string","setter":true}
])

module.exports = {
  implementation: HTMLFrameSetElementImpl
}