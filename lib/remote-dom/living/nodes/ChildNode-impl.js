class ChildNodeImpl {
  async remove () {
    return await this._client.DOM.removeNode({nodeId: this._nodeId})
  }
}

module.exports = {
  implementation: ChildNodeImpl
}