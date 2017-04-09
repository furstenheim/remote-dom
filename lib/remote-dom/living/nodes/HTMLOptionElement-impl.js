const HTMLElementImpl = require('./HTMLElement-impl').implementation
const utils = require('./../../utils')

class HTMLOptionElementImpl extends HTMLElementImpl {

}

// TODO form

utils.defineRemoteProperties(HTMLOptionElementImpl.prototype, [
{"name":"disabled","type":"boolean","setter":true},
{"name":"label","type":"string","setter":true},
{"name":"defaultSelected","type":"boolean","setter":true},
{"name":"selected","type":"boolean","setter":true},
{"name":"value","type":"string","setter":true},
{"name":"text","type":"string","setter":true},
{"name":"index","type":"number"}
])

module.exports = {
  implementation: HTMLOptionElementImpl
}