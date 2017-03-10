const utils = require('./../../utils')
const EventTargetRemoteImpl = require('./../events/EventTarget-remote-impl').implementation

class NodeRemoteImpl extends EventTargetRemoteImpl {
  constructor (client, {nodeId}) {
    super(client)
    this._nodeId = nodeId
  }
}

module.exports = {
  implementation: NodeRemoteImpl
}