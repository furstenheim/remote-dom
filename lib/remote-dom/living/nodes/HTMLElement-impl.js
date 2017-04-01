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
    name: 'blur'
  },
  {
    type: 'function',
    name: 'focus'
  },
  {
    type: 'number',
    name: 'tabIndex',
    setter: true
  }
])

// TODO dispatchEvent, style, setTabIndex
module.exports = {
  implementation: HTMLElementImpl
}