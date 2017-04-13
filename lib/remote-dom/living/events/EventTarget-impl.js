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
  async addEventListener (type, callback) {
    const {Runtime} = this._client
    const objectId = await this._objectId
    const {result} = await Runtime.callFunctionOn({
      objectId,
      functionDeclaration: `function (type) {
        const eventCaller = function (
      }
        
    `, arguments: [{type}]
    })
  }
}

module.exports = {
  implementation: EventTargetImpl
}