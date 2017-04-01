const HTMLElementImpl = require('./HTMLElement-impl').implementation
const utils = require('./../../utils')
class HTMLButtonElementImpl extends HTMLElementImpl {

}

utils.defineRemoteProperties(HTMLButtonElementImpl.prototype, [
  {
    type: 'string',
    name: 'type'
  }
])

// todo form, set type

module.exports = {
  implementation: HTMLButtonElementImpl
}