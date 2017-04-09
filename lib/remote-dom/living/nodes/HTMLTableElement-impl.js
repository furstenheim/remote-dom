const HTMLElementImpl = require('./HTMLElement-impl').implementation
const utils = require('./../../utils')

class HTMLTableElementImpl extends HTMLElementImpl {

}

// TODO caption
// TODO createCaption
// TODO tHead
// TODO createTHead
// TODO tFoot
// TODO createTFoot
// TODO tBodies
// TODO rows
// TODO insertRow
// TODO deleteRow
// TODO align
// TODO border
// TODO frame
// TODO rules
// TODO summary
// TODO width
// TODO bgColor
// TODO cellPadding
// TODO cellSpacing

utils.defineRemoteProperties(HTMLTableElementImpl.prototype, [
{"name":"deleteCaption","type":"function"},
{"name":"deleteTHead","type":"function"},
{"name":"deleteTFoot","type":"function"}
])

module.exports = {
  implementation: HTMLTableElementImpl
}