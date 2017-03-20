const utils = require('./../../utils')
const EventTargetImpl = require('./../events/EventTarget-impl').implementation

class NodeImpl extends EventTargetImpl {
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
  implementation: NodeImpl
}