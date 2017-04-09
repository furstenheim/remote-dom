const HTMLMediaElementImpl = require('./HTMLMediaElement-impl').implementation
const utils = require('./../../utils')

class HTMLVideoElementImpl extends HTMLMediaElementImpl {

}


utils.defineRemoteProperties(HTMLVideoElementImpl.prototype, [
{"name":"width","type":"number","setter":true},
{"name":"height","type":"number","setter":true},
{"name":"videoWidth","type":"number"},
{"name":"videoHeight","type":"number"},
{"name":"poster","type":"string","setter":true}
])

module.exports = {
  implementation: HTMLVideoElementImpl
}