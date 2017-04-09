const HTMLElementImpl = require('./HTMLElement-impl').implementation
const utils = require('./../../utils')

class HTMLCanvasElementImpl extends HTMLElementImpl {

}

// TODO getContext
// TODO probablySupportsContext
// TODO setContext
// TODO toDataURL
// TODO toBlob

utils.defineRemoteProperties(HTMLCanvasElementImpl.prototype, [
{"name":"width","type":"number","setter":true},
{"name":"height","type":"number","setter":true}
])

module.exports = {
  implementation: HTMLCanvasElementImpl
}