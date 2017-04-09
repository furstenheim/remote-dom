const HTMLElementImpl = require('./HTMLElement-impl').implementation
const utils = require('./../../utils')

class HTMLDirectoryElementImpl extends HTMLElementImpl {

}


utils.defineRemoteProperties(HTMLDirectoryElementImpl.prototype, [
{"name":"compact","type":"boolean","setter":true}
])

module.exports = {
  implementation: HTMLDirectoryElementImpl
}