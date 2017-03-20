const utils = require('./../../utils')
const EventTargetImpl = require('./../events/EventTarget-impl').implementation

class NodeImpl extends EventTargetImpl {
  constructor (client, {nodeId}) {
    super(client)
    this._nodeId = nodeId
  }
}

module.exports = {
  implementation: NodeImpl
}