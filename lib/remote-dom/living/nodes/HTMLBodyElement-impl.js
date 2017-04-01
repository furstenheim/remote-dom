const HTMLElementImpl = require('./HTMLElement-impl').implementation

class HTMLBodyElementImpl extends HTMLElementImpl {}

// TODO define window events

module.exports = {
  implementation: HTMLBodyElementImpl
}
