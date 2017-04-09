const HTMLElementImpl = require('./HTMLElement-impl').implementation
const utils = require('./../../utils')

class HTMLInputElementImpl extends HTMLElementImpl {

}

// TODO form
// TODO files
// TODO setRangeText
// TODO setRangeText
// TODO setSelectionRange
// TODO align
// TODO useMap

utils.defineRemoteProperties(HTMLInputElementImpl.prototype, [
{"name":"accept","type":"string","setter":true},
{"name":"alt","type":"string","setter":true},
{"name":"autocomplete","type":"string","setter":true},
{"name":"autofocus","type":"boolean","setter":true},
{"name":"defaultChecked","type":"boolean","setter":true},
{"name":"checked","type":"boolean","setter":true},
{"name":"dirName","type":"string","setter":true},
{"name":"disabled","type":"boolean","setter":true},
{"name":"formNoValidate","type":"boolean","setter":true},
{"name":"formTarget","type":"string","setter":true},
{"name":"inputMode","type":"string","setter":true},
{"name":"max","type":"string","setter":true},
{"name":"maxLength","type":"number","setter":true},
{"name":"min","type":"string","setter":true},
{"name":"minLength","type":"number","setter":true},
{"name":"multiple","type":"boolean","setter":true},
{"name":"name","type":"string","setter":true},
{"name":"pattern","type":"string","setter":true},
{"name":"placeholder","type":"string","setter":true},
{"name":"readOnly","type":"boolean","setter":true},
{"name":"required","type":"boolean","setter":true},
{"name":"size","type":"number","setter":true},
{"name":"src","type":"string","setter":true},
{"name":"step","type":"string","setter":true},
{"name":"type","type":"string","setter":true},
{"name":"defaultValue","type":"string","setter":true},
{"name":"value","type":"string","setter":true},
{"name":"select","type":"function"},
{"name":"selectionStart","type":"number","setter":true},
{"name":"selectionEnd","type":"number","setter":true},
{"name":"selectionDirection","type":"string","setter":true}
])

module.exports = {
  implementation: HTMLInputElementImpl
}