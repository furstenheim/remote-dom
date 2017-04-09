const HTMLElementImpl = require('./HTMLElement-impl').implementation
const utils = require('./../../utils')

class HTMLSelectElementImpl extends HTMLElementImpl {

}

// TODO form
// TODO options
// TODO add
// TODO remove

utils.defineRemoteProperties(HTMLSelectElementImpl.prototype, [
{"name":"autofocus","type":"boolean","setter":true},
{"name":"disabled","type":"boolean","setter":true},
{"name":"multiple","type":"boolean","setter":true},
{"name":"name","type":"string","setter":true},
{"name":"required","type":"boolean","setter":true},
{"name":"size","type":"number","setter":true},
{"name":"type","type":"string"},
{"name":"length","type":"number","setter":true},
{"name":"remove","type":"function"},
{"name":"selectedIndex","type":"number","setter":true},
{"name":"value","type":"string","setter":true}
])

module.exports = {
  implementation: HTMLSelectElementImpl
}