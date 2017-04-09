const HTMLElementImpl = require('./HTMLElement-impl').implementation
const utils = require('./../../utils')

class HTMLAppletElementImpl extends HTMLElementImpl {

}


utils.defineRemoteProperties(HTMLAppletElementImpl.prototype, [
{"name":"align","type":"string","setter":true},
{"name":"alt","type":"string","setter":true},
{"name":"archive","type":"string","setter":true},
{"name":"code","type":"string","setter":true},
{"name":"codeBase","type":"string","setter":true},
{"name":"height","type":"string","setter":true},
{"name":"hspace","type":"number","setter":true},
{"name":"name","type":"string","setter":true},
{"name":"object","type":"string","setter":true},
{"name":"vspace","type":"number","setter":true},
{"name":"width","type":"string","setter":true}
])

module.exports = {
  implementation: HTMLAppletElementImpl
}