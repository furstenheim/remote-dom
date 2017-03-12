const utils = require('./../utils')
const privateProperties = Symbol('Node list')
class NodeList {
  constructor (client, {nodes}) {
    this[utils.clientSymbol] = client
    this[privateProperties] = {}
    this[privateProperties].nodes = nodes
    for (let i = 0; i < nodes.length; i++) {
      this[i] = nodes[i]
    }
  }
}

module.exports = function (core) {
  core.NodeList = NodeList;
}

module.exports.createStatic = function (client, nodes) {
  return new NodeList(client, {nodes})
}