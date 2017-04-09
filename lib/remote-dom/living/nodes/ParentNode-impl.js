const utils = require('./../../utils')
const Node = require('./Node-impl').implementation
const NodeList = require('./../node-list')
// We need living to assign proper element to querySelectorAll
let living
class ParentNodeImpl {
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
  async querySelector (selector) {
    const parentNode = this
    const selection = await this._client.DOM.querySelector({nodeId: this._nodeId, selector})
    const nodeId = selection.nodeId
    const description = await parentNode._client.DOM.resolveNode({nodeId})
    return new living[description.object.className](parentNode._client, {nodeId})
  }
}
module.exports = {
  implementation: ParentNodeImpl
}
// We need to load living after the module has been defined. Otherwise Element is loaded before parent is defined
living = require('..')