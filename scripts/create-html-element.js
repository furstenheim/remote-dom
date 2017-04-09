const argv = require('minimist')(process.argv.slice(2))
const fs = require('fs')
const path = require('path')
const _ = require('lodash')
const webidl2 = require('webidl2')
if (argv._.length !== 1) {
  throw new Error('Provide exactly one name')
}
const name = argv._[0]
if (!name.match(/^HTML/)) {
  throw new Error('Wrong name')
}
const idl = webidl2.parse(fs.readFileSync(`./lib/remote-dom/living/nodes/${name}.idl`).toString())[0]




const fileName = name + '-impl.js'
const content = fileContent(idl)

fs.writeFileSync(path.join('lib/remote-dom/living/nodes', fileName), content)
addToIndex(name, fileName)
//console.log(content)

console.log(argv)

function fileContent (idl) {
  const name = idl.name
  const inheritance = idl.inheritance

  const [allowedMethods, todos] = _.partition(idl.members, function (member) {
    return (member.type === 'attribute'
    && _.includes(['DOMString', 'boolean', 'number', 'long'], member.idlType.idlType)) ||
      (member.type === 'operation' &&
      _.includes(['DOMString', 'boolean', 'number', 'long', 'void'], member.idlType.idlType)
      && member.arguments.length === 0)
  })
  const todosString = _.map(todos, t => `// TODO ${t.name}`).join('\n')
  const allowedMethodsArray = _.map(allowedMethods, function (method) {
    const object = {name: method.name}
    if (method.type === 'operation') {
      object.type = 'function'
      const jsType = idlType2js(method.idlType.idlType)
      if (jsType) object.returnType = jsType
    }
    if (method.type === 'attribute') {
      const jsType = idlType2js(method.idlType.idlType)
      object.type = jsType
      if (!method.readonly) object.setter = true
    }
    return JSON.stringify(object)
  }).join(',\n')
  const allowedMethodsString = `utils.defineRemoteProperties(${name}Impl.prototype, [\n${allowedMethodsArray}\n])\n`
  const content = `const ${inheritance}Impl = require('./${inheritance}-impl').implementation
${allowedMethods.length ? "const utils = require('./../../utils')\n" : ''}
class ${name}Impl extends ${inheritance}Impl {

}

${todos.length ? todosString + '\n' : ''}
${allowedMethods.length ? allowedMethodsString: ''}
module.exports = {
  implementation: ${name}Impl
}`
  return content
}

function addToIndex (name, fileName) {
  const listOfNodes = fs.readFileSync('./lib/remote-dom/living/index.js').toString().split('\n')
  const index = listOfNodes.findIndex(l => l === "require('./node-list')(exports)")
  const line = `exports.${name} = require('${path.join('./', fileName)}').implementation`
  listOfNodes.splice(index, 0, line)
  fs.writeFileSync('./lib/remote-dom/living/index.js', listOfNodes.join('\n'))
}

function idlType2js (type) {
  const idlType2js = {
    'DOMString': 'string',
    'number': 'number',
    'boolean': 'boolean',
    'long': 'number'
  }
  return idlType2js[type]
}