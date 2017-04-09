const HTMLElementImpl = require('./HTMLElement-impl').implementation
const utils = require('./../../utils')

class HTMLBaseElementImpl extends HTMLElementImpl {

}


utils.defineRemoteProperties(HTMLBaseElementImpl.prototype, [
{"name":"href","type":"string","setter":true},
{"name":"target","type":"string","setter":true}
])

module.exports = {
  implementation: HTMLBaseElementImpl
}