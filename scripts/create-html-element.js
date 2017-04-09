// useful command ls lib/remote-dom/living/nodes/ | grep .idl | sed 's/\.idl$//' |
const createHTMLElement = require('./create-html-element-src')
var readline = require('readline')
const argv = require('minimist')(process.argv.slice(2))
console.log(process.argv)
const fs = require('fs')
const _ = require('lodash')
if (argv._.length !== 1) {
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  })

  rl.on('line', function(line){
    createHTMLElement(line)
  })
} else {
  const name = argv._[0]
  createHTMLElement(name)
}

