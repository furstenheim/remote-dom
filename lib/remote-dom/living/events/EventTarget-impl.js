const utils = require('./../../utils')

class EventTargetImpl {
  constructor (client) {
    if (client === undefined) throw new Error('Client cannot be undefined')
    this._client = client
  }
}

module.exports = {
  implementation: EventTargetImpl
}