const HTMLElementImpl = require('./HTMLElement-impl').implementation
const utils = require('./../../utils')

class HTMLTimeElementImpl extends HTMLElementImpl {

}


utils.defineRemoteProperties(HTMLTimeElementImpl.prototype, [
{"name":"dateTime","type":"string","setter":true}
])

module.exports = {
  implementation: HTMLTimeElementImpl
}