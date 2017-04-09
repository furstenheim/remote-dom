const HTMLElementImpl = require('./HTMLElement-impl').implementation
const utils = require('./../../utils')

class HTMLDataElementImpl extends HTMLElementImpl {

}


utils.defineRemoteProperties(HTMLDataElementImpl.prototype, [
{"name":"value","type":"string","setter":true}
])

module.exports = {
  implementation: HTMLDataElementImpl
}