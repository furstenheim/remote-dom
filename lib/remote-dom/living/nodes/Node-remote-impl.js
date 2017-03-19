const utils = require('./../../utils')
const EventTargetRemoteImpl = require('./../events/EventTarget-remote-impl').implementation

class NodeRemoteImpl extends EventTargetRemoteImpl {
  constructor (client, {nodeId}) {
    super(client)
    this._nodeId = nodeId
  }
  get _objectId () {
    const {DOM} = this._client
    return DOM.resolveNode({nodeId: this._nodeId})
      .then(function ({object: {objectId}}) {
        return objectId
      })
  }
}

module.exports = {
  implementation: NodeRemoteImpl
}