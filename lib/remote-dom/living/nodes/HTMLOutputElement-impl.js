const HTMLElementImpl = require('./HTMLElement-impl').implementation
const utils = require('./../../utils')

class HTMLOutputElementImpl extends HTMLElementImpl {

}


utils.defineRemoteProperties(HTMLOutputElementImpl.prototype, [
{"name":"name","type":"string","setter":true}
])

module.exports = {
  implementation: HTMLOutputElementImpl
}