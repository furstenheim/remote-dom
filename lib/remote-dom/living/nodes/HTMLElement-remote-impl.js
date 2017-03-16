const ElementRemoteImpl = require('./Element-remote-impl').implementation

class HTMLElementRemoteImpl extends ElementRemoteImpl {
  async click () {
    const {DOM, Runtime} = this._client
    const {object: {objectId}} = await DOM.resolveNode({nodeId: this._nodeId})
    await Runtime.callFunctionOn({
      objectId,
      functionDeclaration: `function () {
        return this.click()
      }
      `})
  }
}
module.exports = {
  implementation: HTMLElementRemoteImpl
}