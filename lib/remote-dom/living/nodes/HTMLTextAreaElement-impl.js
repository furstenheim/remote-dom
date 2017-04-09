const HTMLElementImpl = require('./HTMLElement-impl').implementation
const utils = require('./../../utils')

class HTMLTextAreaElementImpl extends HTMLElementImpl {

}

// TODO form
// TODO setRangeText
// TODO setRangeText
// TODO setSelectionRange

utils.defineRemoteProperties(HTMLTextAreaElementImpl.prototype, [
{"name":"autocomplete","type":"string","setter":true},
{"name":"autofocus","type":"boolean","setter":true},
{"name":"cols","type":"number","setter":true},
{"name":"dirName","type":"string","setter":true},
{"name":"disabled","type":"boolean","setter":true},
{"name":"inputMode","type":"string","setter":true},
{"name":"maxLength","type":"number","setter":true},
{"name":"minLength","type":"number","setter":true},
{"name":"name","type":"string","setter":true},
{"name":"placeholder","type":"string","setter":true},
{"name":"readOnly","type":"boolean","setter":true},
{"name":"required","type":"boolean","setter":true},
{"name":"rows","type":"number","setter":true},
{"name":"wrap","type":"string","setter":true},
{"name":"type","type":"string"},
{"name":"defaultValue","type":"string","setter":true},
{"name":"value","type":"string","setter":true},
{"name":"textLength","type":"number"},
{"name":"select","type":"function"},
{"name":"selectionStart","type":"number","setter":true},
{"name":"selectionEnd","type":"number","setter":true},
{"name":"selectionDirection","type":"string","setter":true}
])

module.exports = {
  implementation: HTMLTextAreaElementImpl
}