const NodeImpl = require('./Node-impl').implementation
const ParentNodeImpl = require('./ParentNode-impl').implementation
const utils = require('./../../utils')
class DocumentImpl extends NodeImpl {
  constructor (client, {nodeId}) {
    super(client, {nodeId})
  }
}

utils.mixin(DocumentImpl.prototype, ParentNodeImpl.prototype)

module.exports = {
  implementation: DocumentImpl
}
