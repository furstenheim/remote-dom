const utils = require('./../utils')
const define = utils.define
const Document = require('./../living/nodes/Document-remote-impl').implementation
module.exports = window

const dom = require('../living')
dom.Window = Window

async function window (client) {
  const window = await new Promise(function (resolve) {
    new Window(client, resolve)
  })
  return window
}

function Window (client, callback) {
  const window = this
  window._client = client
  for (const name in dom) {
    Object.defineProperty(window, name, {
      enumerable: false,
      configurable: true,
      writable: true,
      value: dom[name]
    })
  }

  run.call(this, callback)
  async function run (callback) {
    const documentQuery = await this._client.DOM.getDocument()
    console.log(documentQuery)
    this._document = new Document(client, documentQuery.root.nodeId)
    define(this, {
      get document () {
        return window._document
      }
    })
    callback(this)
  }
  return this
}