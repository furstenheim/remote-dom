const HTMLElementImpl = require('./HTMLElement-impl').implementation
const utils = require('./../../utils')

class HTMLParamElementImpl extends HTMLElementImpl {

}

// TODO type
// TODO valueType

utils.defineRemoteProperties(HTMLParamElementImpl.prototype, [
{"name":"name","type":"string","setter":true},
{"name":"value","type":"string","setter":true}
])

module.exports = {
  implementation: HTMLParamElementImpl
}