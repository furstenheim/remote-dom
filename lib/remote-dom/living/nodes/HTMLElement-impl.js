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
  },
  {
    type: 'number',
    name: 'offsetParent'
  },
  {
    type: 'number',
    name: 'offsetTop'
  },
  {
    type: 'number',
    name: 'offsetLeft'
  },
  {
    type: 'number',
    name: 'offsetWidth'
  },
  {
    type: 'number',
    name: 'offsetHeight'
  }
])

// TODO dispatchEvent, style
module.exports = {
  implementation: HTMLElementImpl
}