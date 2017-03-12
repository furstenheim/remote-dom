class NodeList {
  constructor (client, {nodes}) {
    this._client = client
    this._nodes = nodes
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