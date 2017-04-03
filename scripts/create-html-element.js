const argv = require('minimist')(process.argv.slice(2))
const fs = require('fs')
const path = require('path')
if (argv._.length !== 1) {
  throw new Error('Provide exactly one name')
}
const name = argv._[0]
if (!name.match(/^HTML/)) {
  throw new Error('Wrong name')
}

const fileName = name + '-impl.js'
const content = fileContent(name)

fs.writeFileSync(path.join('lib/remote-dom/living/nodes', fileName), content)
addToIndex(name, fileName)

console.log(argv)

function fileContent (name) {
  const implementationName = name + 'Impl'
  const file = fs.readFileSync('./scripts/element-tmpl').toString()
  const content = file.replace(/<%= implementation =%>/g, implementationName)
  return content
}

function addToIndex (name, fileName) {
  const listOfNodes = fs.readFileSync('./lib/remote-dom/living/index.js').toString().split('\n')
  const index = listOfNodes.findIndex(l => l === "require('./node-list')(exports)")
  const line = `exports.${name} = require('${path.join('./', fileName)}').implementation`
  listOfNodes.splice(index, 0, line)
  fs.writeFileSync('./lib/remote-dom/living/index.js', listOfNodes.join('\n'))
}