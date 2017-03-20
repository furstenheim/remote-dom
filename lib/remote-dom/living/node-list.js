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
    this.length = nodes.length
    const nodeList = this
    this[Symbol.iterator] = function () {
      return {
        i: 0,
        next () {
          if (this.i < nodeList.length) {
            const result = {value: nodeList[this.i], done: false}
            this.i++
            return result
          } else {
            return {value: undefined, done: true}
          }
        }
      }
    }
  }
}

module.exports = function (core) {
  core.NodeList = NodeList;
}

module.exports.createStatic = function (client, nodes) {
  return new NodeList(client, {nodes})
}