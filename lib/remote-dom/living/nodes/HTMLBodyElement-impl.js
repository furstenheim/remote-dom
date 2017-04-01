const HTMLElementImpl = require('./HTMLElement-impl').interface

class HTMLBodyElementImpl extends HTMLElementImpl {}

// TODO define window events

module.exports = {
  implementation: HTMLBodyElementImpl
}
