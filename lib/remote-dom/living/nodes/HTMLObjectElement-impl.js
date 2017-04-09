const HTMLElementImpl = require('./HTMLElement-impl').implementation
const utils = require('./../../utils')

class HTMLObjectElementImpl extends HTMLElementImpl {

}

// TODO form
// TODO contentDocument
// TODO align
// TODO archive
// TODO code
// TODO declare
// TODO hspace
// TODO standby
// TODO vspace
// TODO codeBase
// TODO codeType
// TODO border

utils.defineRemoteProperties(HTMLObjectElementImpl.prototype, [
{"name":"data","type":"string","setter":true},
{"name":"type","type":"string","setter":true},
{"name":"name","type":"string","setter":true},
{"name":"useMap","type":"string","setter":true},
{"name":"width","type":"string","setter":true},
{"name":"height","type":"string","setter":true}
])

module.exports = {
  implementation: HTMLObjectElementImpl
}