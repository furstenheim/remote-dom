const HTMLElementRemoteImpl = require('./HTMLElement-remote-impl').implementation

class HTMLDIVElementRemoteImpl extends HTMLElementRemoteImpl {}

module.exports = {
  implementation: HTMLDIVElementRemoteImpl
}