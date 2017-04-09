const HTMLElementImpl = require('./HTMLElement-impl').implementation
const utils = require('./../../utils')

class HTMLMapElementImpl extends HTMLElementImpl {

}

// TODO areas

utils.defineRemoteProperties(HTMLMapElementImpl.prototype, [
{"name":"name","type":"string","setter":true}
])

module.exports = {
  implementation: HTMLMapElementImpl
}