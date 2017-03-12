const utils = require('./../../utils')

class EventTargetRemoteImpl {
  constructor (client) {
    if (client === undefined) throw new Error('Client cannot be undefined')
    this._client = client
  }
}

module.exports = {
  implementation: EventTargetRemoteImpl
}