const HTMLElementImpl = require('./HTMLElement-impl').implementation
const utils = require('./../../utils')

class HTMLQuoteElementImpl extends HTMLElementImpl {

}


utils.defineRemoteProperties(HTMLQuoteElementImpl.prototype, [
{"name":"cite","type":"string","setter":true}
])

module.exports = {
  implementation: HTMLQuoteElementImpl
}