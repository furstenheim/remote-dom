const NodeRemoteImpl = require('./Node-impl').implementation
const utils = require('./../../utils')
const ParentNodeImpl = require('./ParentNode-impl').implementation
const ChildNodeImpl = require('./ChildNode-impl').implementation
const ClientRect = require('./../ClientRect').implementation
class ElementImpl extends NodeRemoteImpl {

  get outerHTML () {
    return this._client.DOM.getOuterHTML({nodeId: this._nodeId})
      .then(function (result) {
        return result.outerHTML
      })
  }
  get classList () {
    const element = this
    return Promise.resolve()
      .then(async function () {
        const classes = await element.getAttribute('class')
        if (!classes) return []
        return classes.split(' ').map(className => className.replace(/ /g, ''))
      })
  }
  async hasAttributes () {
    const attributeNames = await this.getAttributeNames()
    return !!attributeNames.length
  }
  async getAttributeNames () {
    const {attributes} = await this._client.DOM.getAttributes({nodeId: this._nodeId})
    return attributes.filter((v, i) => i % 2 === 0)
  }
  async getAttribute (name) {
    const {attributes} = await this._client.DOM.getAttributes({nodeId: this._nodeId})
    const nameIndex = attributes.findIndex(function (value, index) {
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
  async getBoundingClientRect () {
    const {Runtime} = this._client
    const objectId = await this._objectId
    const {result} = await Runtime.callFunctionOn({
      objectId,
      functionDeclaration: `function () {
                return this.getBoundingClientRect()
              }`
    })
    return new ClientRect(this._client, {objectId: result.objectId})
  }

}

utils.defineRemoteProperties(ElementImpl.prototype, [
  {
    type: 'string',
    name: 'namespaceURI'
  },
  {
    type: 'string',
    name: 'prefix'
  },
  {
    type: 'string',
    name: 'localName'
  },
  {
    type: 'string',
    name: 'tagName'
  },
  {
    type: 'string',
    name: 'innerHTML'
  }
])

// TODO get attributes, set outerHTML, set innerHTML, getAttributeNS, setAttributeNS, removeAttribute, removeAttributeNS ..

utils.mixin(ElementImpl.prototype, ParentNodeImpl.prototype)
utils.mixin(ElementImpl.prototype, ChildNodeImpl.prototype)

module.exports = {
  implementation: ElementImpl
}