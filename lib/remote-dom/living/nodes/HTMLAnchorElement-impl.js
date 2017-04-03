const utils = require('./../../utils')
const HTMLElementImpl = require('./HTMLElement-impl').implementation
const HTMLHyperlinkElementUtils = require('./HTMLHyperlinkElementUtils-impl').implementation
class HTMLAnchorElementImpl extends HTMLElementImpl {

}

utils.defineRemoteProperties(HTMLAnchorElementImpl.prototype, [
  {
    type: 'string',
    name: 'text'
  }
])
utils.mixin(HTMLAnchorElementImpl.prototype, HTMLHyperlinkElementUtils.prototype)
module.exports = {
  implementation: HTMLAnchorElementImpl
}
