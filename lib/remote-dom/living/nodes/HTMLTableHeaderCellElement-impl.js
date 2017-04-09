const HTMLTableCellElementImpl = require('./HTMLTableCellElement-impl').implementation
const utils = require('./../../utils')

class HTMLTableHeaderCellElementImpl extends HTMLTableCellElementImpl {

}


utils.defineRemoteProperties(HTMLTableHeaderCellElementImpl.prototype, [
{"name":"scope","type":"string","setter":true},
{"name":"abbr","type":"string","setter":true},
{"name":"sorted","type":"string","setter":true}
])

module.exports = {
  implementation: HTMLTableHeaderCellElementImpl
}