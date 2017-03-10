const utils = require('./../../utils')


class ParentNodeRemoteImpl {
  async querySelectorAll (selector) {
    const selection = await this._client.DOM.querySelectorAll({nodeId: this.nodeId, selector})
    return selection
  }
}

module.exports = {
  implementation: ParentNodeRemoteImpl
}