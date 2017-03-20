const utils = require('./../../utils')
class EventTargetImpl {
  constructor (client) {
    if (client === undefined) throw new Error('Client cannot be undefined')
    this._client = client
  }
  get _objectId () {
    const {DOM} = this._client
    return DOM.resolveNode({nodeId: this._nodeId})
      .then(function ({object: {objectId}}) {
        return objectId
      })
  }
}

module.exports = {
  implementation: EventTargetImpl
}