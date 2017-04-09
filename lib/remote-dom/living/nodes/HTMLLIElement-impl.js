const HTMLElementImpl = require('./HTMLElement-impl').implementation
const utils = require('./../../utils')

class HTMLLIElementImpl extends HTMLElementImpl {

}

// TODO type

utils.defineRemoteProperties(HTMLLIElementImpl.prototype, [
{"name":"value","type":"number","setter":true}
])

module.exports = {
  implementation: HTMLLIElementImpl
}