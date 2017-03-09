const utils = require('./../../utils')
const EventTargetRemoteImpl = require('./../events/EventTarget-remote-impl').implementation

class NodeRemoteImpl extends EventTargetRemoteImpl {
  constructor (client) {
    this[utils.clientSymbol] = client
  }
}

module.exports = {
  implementation: NodeRemoteImpl
}