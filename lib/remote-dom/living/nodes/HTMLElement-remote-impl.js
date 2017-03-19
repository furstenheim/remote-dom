const ElementRemoteImpl = require('./Element-remote-impl').implementation

class HTMLElementRemoteImpl extends ElementRemoteImpl {
  async click () {
    const {Runtime} = this._client
    const objectId = await this._objectId
    await Runtime.callFunctionOn({
      objectId,
      functionDeclaration: `function () {
        return this.click()
      }
      `})
  }
  async blur () {
    const {Runtime} = this._client
    const objectId = await this._objectId
    await Runtime.callFunctionOn({
      objectId,
      functionDeclaration: `function () {
        return this.blur()
      }`
    })
  }
  async focus () {
    const {Runtime} = this._client
    const objectId = await this._objectId
    await Runtime.callFunctionOn({
      objectId,
      functionDeclaration: `function () {
        return this.focus()
      }`
    })
  }
}
module.exports = {
  implementation: HTMLElementRemoteImpl
}