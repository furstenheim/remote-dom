const HTMLElementImpl = require('./HTMLElement-impl').implementation
const utils = require('./../../utils')

class HTMLIFrameElementImpl extends HTMLElementImpl {

}

// TODO contentDocument
// TODO contentWindow
// TODO getSVGDocument
// TODO align
// TODO scrolling
// TODO frameBorder
// TODO longDesc
// TODO marginHeight
// TODO marginWidth

utils.defineRemoteProperties(HTMLIFrameElementImpl.prototype, [
{"name":"src","type":"string","setter":true},
{"name":"srcdoc","type":"string","setter":true},
{"name":"name","type":"string","setter":true},
{"name":"seamless","type":"boolean","setter":true},
{"name":"allowFullscreen","type":"boolean","setter":true},
{"name":"width","type":"string","setter":true},
{"name":"height","type":"string","setter":true}
])

module.exports = {
  implementation: HTMLIFrameElementImpl
}