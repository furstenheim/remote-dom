const HTMLElementImpl = require('./HTMLElement-impl').implementation
const utils = require('./../../utils')

class HTMLTableColElementImpl extends HTMLElementImpl {

}

// TODO align
// TODO ch
// TODO chOff
// TODO vAlign
// TODO width

utils.defineRemoteProperties(HTMLTableColElementImpl.prototype, [
{"name":"span","type":"number","setter":true}
])

module.exports = {
  implementation: HTMLTableColElementImpl
}