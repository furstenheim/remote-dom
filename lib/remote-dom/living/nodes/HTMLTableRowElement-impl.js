const HTMLElementImpl = require('./HTMLElement-impl').implementation
const utils = require('./../../utils')

class HTMLTableRowElementImpl extends HTMLElementImpl {

}

// TODO cells
// TODO insertCell
// TODO deleteCell
// TODO align
// TODO ch
// TODO chOff
// TODO vAlign
// TODO bgColor

utils.defineRemoteProperties(HTMLTableRowElementImpl.prototype, [
{"name":"rowIndex","type":"number"},
{"name":"sectionRowIndex","type":"number"}
])

module.exports = {
  implementation: HTMLTableRowElementImpl
}