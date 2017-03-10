const utils = require('./../../utils')

class EventTargetRemoteImpl {
  constructor (client) {
    this._client = client
  }
}

module.exports = {
  implementation: EventTargetRemoteImpl
}