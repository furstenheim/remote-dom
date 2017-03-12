const utils = require('./../../utils')
const Node = require('./Node-remote-impl').implementation
const NodeList = require('./../node-list-remote')
// We need living to assign proper element to querySelectorAll
const living = require('..')
class ParentNodeRemoteImpl {
  async querySelectorAll (selector) {
    const parentNode = this

    const selection = await this._client.DOM.querySelectorAll({nodeId: this._nodeId, selector})

    const listOfNodes = await Promise.all(selection.nodeIds.map(function (nodeId) {
      return Promise.all([nodeId, parentNode._client.DOM.resolveNode({nodeId})])
      }))
    const listOfNodesWithProperClass = listOfNodes.map(function ([nodeId, description]) {
      return new living[description.object.className](parentNode._client, {nodeId})
    })
    return NodeList.createStatic(this._client, listOfNodesWithProperClass)
  }
}

module.exports = {
  implementation: ParentNodeRemoteImpl
}