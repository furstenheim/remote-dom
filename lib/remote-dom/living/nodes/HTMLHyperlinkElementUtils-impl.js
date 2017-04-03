const HTMLElementImpl = require('./HTMLElement-impl').implementation
const utils = require('./../../utils')

class HTMLHyperlinkElementUtilsImpl extends HTMLElementImpl {

}

utils.defineRemoteProperties(HTMLHyperlinkElementUtilsImpl.prototype, [
  {
    type: 'string',
    name: 'href',
    setter: true
  },
  {
    type: 'string',
    name: 'protocol',
    setter: true
  },
  {
    type: 'string',
    name: 'host',
    setter: true
  },
  {
    type: 'string',
    name: 'hostname',
    setter: true
  },
  {
    type: 'string',
    name: 'port',
    setter: true
  },
  {
    type: 'string',
    name: 'pathname',
    setter: true
  },
  {
    type: 'string',
    name: 'search',
    setter: true
  },
  {
    type: 'string',
    name: 'hash',
    setter: true
  },
  {
    type: 'string',
    name: 'username',
    setter: true
  },
  {
    type: 'string',
    name: 'password',
    setter: true
  },
  {
    type: 'string',
    name: 'origin'
  },
  {
    type: 'function',
    returnType: 'string',
    name: 'toString'
  }
])
module.exports = {
  implementation: HTMLHyperlinkElementUtilsImpl
}