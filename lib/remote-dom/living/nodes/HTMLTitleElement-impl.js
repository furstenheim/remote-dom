const HTMLElementImpl = require('./HTMLElement-impl').implementation
const utils = require('./../../utils')

class HTMLTitleElementImpl extends HTMLElementImpl {

}


utils.defineRemoteProperties(HTMLTitleElementImpl.prototype, [
{"name":"text","type":"string","setter":true}
])

module.exports = {
  implementation: HTMLTitleElementImpl
}