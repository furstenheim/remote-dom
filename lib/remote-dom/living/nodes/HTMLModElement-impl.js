const HTMLElementImpl = require('./HTMLElement-impl').implementation
const utils = require('./../../utils')

class HTMLModElementImpl extends HTMLElementImpl {

}


utils.defineRemoteProperties(HTMLModElementImpl.prototype, [
{"name":"cite","type":"string","setter":true},
{"name":"dateTime","type":"string","setter":true}
])

module.exports = {
  implementation: HTMLModElementImpl
}