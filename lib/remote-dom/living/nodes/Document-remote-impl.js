const NodeRemoteImpl = require('./Node-remote-impl').implementation
const ParentNodeImpl = require('./ParentNode-remote-impl').implementation
const utils = require('./../../utils')
class DocumentRemoteImpl extends NodeRemoteImpl {
  constructor (client, nodeId) {
    super(client)
    this.nodeId = nodeId
  }
}

utils.mixin(DocumentRemoteImpl.prototype, ParentNodeImpl.prototype)

module.exports = {
  implementation: DocumentRemoteImpl
}
