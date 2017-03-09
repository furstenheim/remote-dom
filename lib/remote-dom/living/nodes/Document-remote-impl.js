const NodeRemoteImpl = require('./Node-remote-impl').implementation

class DocumentRemoteImpl extends NodeRemoteImpl {
  constructor (client) {
    super(client)
  }
}

module.exports = {
  implementation: DocumentRemoteImpl
}