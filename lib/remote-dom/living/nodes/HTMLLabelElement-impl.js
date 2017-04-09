const HTMLElementImpl = require('./HTMLElement-impl').implementation
const utils = require('./../../utils')

class HTMLLabelElementImpl extends HTMLElementImpl {

}

// TODO form

utils.defineRemoteProperties(HTMLLabelElementImpl.prototype, [
{"name":"htmlFor","type":"string","setter":true}
])

module.exports = {
  implementation: HTMLLabelElementImpl
}