const ElementImpl = require('./Element-impl').implementation
const utils = require('./../../utils')

class HTMLElementImpl extends ElementImpl {
}

utils.defineRemoteProperties(HTMLElementImpl.prototype, [
  {
    type: 'function',
    name: 'click'
  },
  {
    type: 'function',
    name: 'blur',
    type: 'function',
    name: 'focus'
  }
])
module.exports = {
  implementation: HTMLElementImpl
}