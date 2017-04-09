const HTMLElementImpl = require('./HTMLElement-impl').implementation
const utils = require('./../../utils')

class HTMLImageElementImpl extends HTMLElementImpl {

}

// TODO name
// TODO lowsrc
// TODO align
// TODO hspace
// TODO vspace
// TODO longDesc
// TODO border

utils.defineRemoteProperties(HTMLImageElementImpl.prototype, [
{"name":"alt","type":"string","setter":true},
{"name":"src","type":"string","setter":true},
{"name":"srcset","type":"string","setter":true},
{"name":"sizes","type":"string","setter":true},
{"name":"crossOrigin","type":"string","setter":true},
{"name":"useMap","type":"string","setter":true},
{"name":"isMap","type":"boolean","setter":true},
{"name":"width","type":"number","setter":true},
{"name":"height","type":"number","setter":true},
{"name":"naturalWidth","type":"number"},
{"name":"naturalHeight","type":"number"},
{"name":"complete","type":"boolean"},
{"name":"currentSrc","type":"string"}
])

module.exports = {
  implementation: HTMLImageElementImpl
}