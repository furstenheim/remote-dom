const HTMLElementImpl = require('./HTMLElement-impl').implementation
const utils = require('./../../utils')

class HTMLTrackElementImpl extends HTMLElementImpl {

}

// TODO NONE
// TODO LOADING
// TODO LOADED
// TODO ERROR
// TODO readyState

utils.defineRemoteProperties(HTMLTrackElementImpl.prototype, [
{"name":"kind","type":"string","setter":true},
{"name":"src","type":"string","setter":true},
{"name":"srclang","type":"string","setter":true},
{"name":"label","type":"string","setter":true},
{"name":"default","type":"boolean","setter":true}
])

module.exports = {
  implementation: HTMLTrackElementImpl
}