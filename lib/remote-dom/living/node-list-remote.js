class NodeList {
  constructor (client, {nodes}) {
    this._client = client
    this._nodes = nodes
  }
}

module.exports = function (core) {
  core.NodeList = NodeList;
}

module.exports.createStatic = function (client, nodes) {
  return new NodeList(client, {nodes})
}