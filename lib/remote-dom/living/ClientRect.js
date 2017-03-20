// TODO find suitable place for this class
const utils = require('./../utils')
class ClientRect {
  constructor (client, {
    objectId
  }) {
    this._client = client
    this._objectId = objectId
  }
}

utils.defineRemoteProperties(ClientRect.prototype, [
  {
    type: 'number',
    name: 'top'
  },
  {
    type: 'number',
    name: 'right'
  },
  {
    type: 'number',
    name: 'bottom'
  },
  {
    type: 'number',
    name: 'left'
  },
  {
    type: 'number',
    name: 'height'
  },
  {
    type: 'number',
    name: 'width'
  }
])

module.exports = {
  implementation: ClientRect
}