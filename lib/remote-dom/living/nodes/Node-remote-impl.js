const utils = require('./../../utils')
const EventTargetRemoteImpl = require('./../events/EventTarget-remote-impl').implementation

class NodeRemoteImpl extends EventTargetRemoteImpl {
  constructor (client) {
    super(client)
  }
}

module.exports = {
  implementation: NodeRemoteImpl
}