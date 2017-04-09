const HTMLElementImpl = require('./HTMLElement-impl').implementation
const utils = require('./../../utils')

class HTMLTableCellElementImpl extends HTMLElementImpl {

}

// TODO headers
// TODO align
// TODO axis
// TODO height
// TODO width
// TODO ch
// TODO chOff
// TODO noWrap
// TODO vAlign
// TODO bgColor

utils.defineRemoteProperties(HTMLTableCellElementImpl.prototype, [
{"name":"colSpan","type":"number","setter":true},
{"name":"rowSpan","type":"number","setter":true},
{"name":"cellIndex","type":"number"}
])

module.exports = {
  implementation: HTMLTableCellElementImpl
}