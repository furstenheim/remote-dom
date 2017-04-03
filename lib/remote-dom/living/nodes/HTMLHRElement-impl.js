const HTMLElementImpl = require('./HTMLElement-impl').implementation
const utils = require('./../../utils')

class HTMLHRElementImpl extends HTMLElementImpl {

}

utils.defineRemoteProperties(HTMLHRElementImpl.prototype, [
  {
    type: 'string',
    name: 'align',
    setter: true
  },
  {
    type: 'string',
    name: 'color',
    setter: true
  },
  {
    type: 'boolean',
    name: 'noshade',
    setter: true
  },
  {
    type: 'string',
    name: 'size',
    setter: true
  },
  {
    type: 'string',
    name: 'width',
    setter: true
  }
])
module.exports = {
  implementation: HTMLHRElementImpl
}