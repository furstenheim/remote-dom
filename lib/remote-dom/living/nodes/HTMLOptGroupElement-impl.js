const HTMLElementImpl = require('./HTMLElement-impl').implementation
const utils = require('./../../utils')

class HTMLOptGroupElementImpl extends HTMLElementImpl {

}


utils.defineRemoteProperties(HTMLOptGroupElementImpl.prototype, [
{"name":"disabled","type":"boolean","setter":true},
{"name":"label","type":"string","setter":true}
])

module.exports = {
  implementation: HTMLOptGroupElementImpl
}