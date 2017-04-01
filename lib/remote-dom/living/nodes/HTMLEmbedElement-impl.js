const HTMLElementImpl = require('./HTMLElement-impl').implementation
const utils = require('./../../utils')

class HTMLEmbedElementImpl extends HTMLElementImpl {

}

utils.defineRemoteProperties(HTMLEmbedElementImpl.prototype,
  [
    {
      type: 'string',
      name: 'src',
      setter: true
    }
  ]
)

module.exports = {
  implementation: HTMLEmbedElementImpl
}

