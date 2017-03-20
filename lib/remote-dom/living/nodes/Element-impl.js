const NodeRemoteImpl = require('./Node-impl').implementation
const utils = require('./../../utils')
const ParentNodeImpl = require('./ParentNode-impl').implementation
const ChildNodeImpl = require('./ChildNode-impl').implementation

class Elementmpl extends NodeRemoteImpl {

  get outerHTML () {
    return this._client.DOM.getOuterHTML({nodeId: this._nodeId})
      .then(function (result) {
        return result.outerHTML
      })
  }
  async getAttributeNames () {
    const {attributes} = await this._client.DOM.getAttributes({nodeId: this._nodeId})
    return attributes.filter((v, i) => i % 2 === 0)
  }
  async getAttribute (name) {
    const {attributes} = await this._client.DOM.getAttributes({nodeId: this._nodeId})
    const nameIndex = attributes.find(function (value, index) {
      return (index % 2 === 0) && value === name
    })
    if (nameIndex === -1) return null
    return attributes[nameIndex + 1]
  }
  async setAttribute (name, value) {
    await this._client.DOM.setAttribute({nodeId: this._nodeId, name, value})
    return
  }
  async removeAttribute (name) {
    await this._client.DOM.removeAttribute({nodeId: this._nodeId, name})
    return
  }
  async hasAttribute (name) {
    const {attributes} = await this._client.DOM.getAttributes({nodeId: this._nodeId})
    const nameIndex = attributes.find(function (value, index) {
      return (index % 2 === 0) && value === name
    })
    return nameIndex !== -1
  }
}
utils.mixin(Elementmpl.prototype, ParentNodeImpl.prototype)
utils.mixin(Elementmpl.prototype, ChildNodeImpl.prototype)

module.exports = {
  implementation: Elementmpl
}