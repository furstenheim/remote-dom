const NodeRemoteImpl = require('./Node-remote-impl').implementation
const utils = require('./../../utils')
const ParentNodeImpl = require('./ParentNode-remote-impl').implementation
const ChildNodeRemoteImpl = require('./ChildNode-remote-impl').implementation

class ElementRemoteImpl extends NodeRemoteImpl {

  get outerHTML () {
    return this._client.DOM.getOuterHTML({nodeId: this._nodeId})
      .then(function (result) {
        return result.outerHTML
      })
  }
}
utils.mixin(ElementRemoteImpl.prototype, ParentNodeImpl.prototype)
utils.mixin(ElementRemoteImpl.prototype, ChildNodeRemoteImpl.prototype)

module.exports = {
  implementation: ElementRemoteImpl
}