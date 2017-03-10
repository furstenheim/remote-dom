const utils = require('./../../utils')
const Node = require('./Node-remote-impl').implementation
const NodeList = require('./../node-list-remote')

class ParentNodeRemoteImpl {
  async querySelectorAll (selector) {
    const selection = await this._client.DOM.querySelectorAll({nodeId: this._nodeId, selector})
    const listOfNodes = selection.nodeIds.map(i => new Node(this._client, {nodeId: i}))
    return NodeList.createStatic(this._client, listOfNodes)
  }
}

module.exports = {
  implementation: ParentNodeRemoteImpl
}