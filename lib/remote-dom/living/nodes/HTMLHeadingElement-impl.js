const HTMLElementImpl = require('./HTMLElement-impl').implementation
const utils = require('./../../utils')

class HTMLHeadingElementImpl extends HTMLElementImpl {

}

utils.defineRemoteProperties(HTMLHeadingElementImpl.prototype, [
  {
    type: 'string',
    name: 'align',
    setter: true
  }
])
module.exports = {
  implementation: HTMLHeadingElementImpl
}