const HTMLElementImpl = require('./HTMLElement-impl').implementation
const utils = require('./../../utils')

class HTMLFormElementImpl extends HTMLElementImpl {

}

utils.defineRemoteProperties(HTMLFormElementImpl.prototype, [
  {
    type: 'number',
    name: 'length'
  },
  {
    type: 'string',
    name: 'name',
    setter: true
  },
  {
    type: 'string',
    name: 'method',
    setter: true
  },
  {
    type: 'string',
    name: 'target',
    setter: true
  },
  {
    type: 'string',
    name: 'action',
    setter: true
  },
  {
    type: 'string',
    name: 'encoding',
    setter: true
  },
  {
    type: 'string',
    name: 'enctype',
    setter: true
  },
  {
    type: 'string',
    name: 'acceptCharset',
    setter: true
  },
  {
    type: 'string',
    name: 'autocomplete',
    setter: true
  },
  {
    type: 'boolean',
    name: 'noValidate',
    setter: true
  },
  {
    type: 'function',
    name: 'submit'
  },
  {
    type: 'function',
    name: 'reset'
  },
  {
    type: 'function',
    returnType: 'boolean',
    name: 'checkValidity'
  },
  {
    type: 'function',
    returnType: 'boolean',
    name: 'reportValidity'
  }
])

// TODO elements, requestAutocomplete
module.exports = {
  implementation: HTMLFormElementImpl
}