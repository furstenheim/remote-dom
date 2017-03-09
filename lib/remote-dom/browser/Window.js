const utils = require('./../utils')
const define = utils.define
const Document = require('./../living/nodes/Document-remote-impl').implementation
module.exports = Window

const dom = require('../living')
dom.Window = Window


function Window (client) {
  const window = this
  window[utils.clientSymbol] = client
  for (const name in dom) {
    Object.defineProperty(window, name, {
      enumerable: false,
      configurable: true,
      writable: true,
      value: dom[name]
    })
  }
  this._document = Document.create()
  return this
}