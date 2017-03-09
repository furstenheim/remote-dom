const utils = require('./../../utils')

class EventTargetRemoteImpl {
  constructor (client) {
    this[utils.clientSymbol] = client
  }
}

module.exports = {
  implementation: EventTargetRemoteImpl
}