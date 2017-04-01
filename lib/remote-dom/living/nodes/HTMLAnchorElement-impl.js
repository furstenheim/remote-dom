const utils = require('./../../utils')
const HTMLElementImpl = require('./HTMLElement-impl').implementation

class HTMLAnchorElementImpl extends HTMLElementImpl {

}

utils.defineRemoteProperties(HTMLAnchorElementImpl.prototype, [
  {
    type: 'string',
    name: 'text'
  }
])

module.exports = {
  implementation: HTMLAnchorElementImpl
}
