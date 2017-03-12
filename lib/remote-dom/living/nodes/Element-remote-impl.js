const NodeRemoteImpl = require('./Node-remote-impl').implementation

class ElementRemoteImpl extends NodeRemoteImpl {

  get outerHTML () {
    return this._client.DOM.getOuterHTML(this._nodeId)
  }
}

module.exports = {
  implementation: ElementRemoteImpl
}