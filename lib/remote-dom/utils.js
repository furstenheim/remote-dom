const _ = require('lodash')
let living
exports.define = function define (object, properties) {
  for (const name of Object.getOwnPropertyNames(properties)) {
    const propDesc = Object.getOwnPropertyDescriptor(properties, name)
    Object.defineProperty(object, name, propDesc)
  }
}

exports.defineRemoteProperties = function defineRemoteProperties (object, properties) {
  for (const property of properties) {
    if (property.type === 'function') {
      const returnType = property.returnType
      exports.define(
        object, {
          async [property.name] () {
            for (const argument of arguments) {
              if (!['string', 'boolean', 'number'].includes(typeof argument)) {
                return Promise.reject(new Error('Only native arguments supported'))
              }
            }
            const argumentArray = [...arguments]
            const argumentsKeys = _.times(argumentArray.length, function (i) {return 'a' + i})
            const argumentsObject = _.zipObject(argumentsKeys, argumentArray)
            const {Runtime} = this._client
            const objectId = await this._objectId
            const {result} = await Runtime.callFunctionOn({
              objectId,
              functionDeclaration: `function (${argumentsKeys.join(',')}) {
                return this.${property.name}(${argumentsKeys.join(',')})
              }`,
              arguments: [argumentsObject]
            })
            if (_.includes(['number', 'boolean', 'string'], returnType)) {
              // TODO throw error if type does not match
              return result.value
            } else if (returnType === 'element') {
              const {objectId} = result
              const {nodeId} = this._client.DOM.requestNode({objectId})
              return new living[result.className](this._client, {nodeId})
            }
          }
        }
      )
    } else if (_.includes(['string', 'boolean', 'number', 'element'], property.type)) {
      function getter () {
        const domElement = this
        return Promise.resolve()
          .then(async function () {
            const {Runtime} = domElement._client
            const objectId = await domElement._objectId
            const {result} = await Runtime.callFunctionOn({
              objectId,
              functionDeclaration: `function () {
                  return this.${property.name}
                }`
            })
            if (_.includes(['nubmer', 'boolean', 'string'], property.type)) {
              return result.value
            } else if (property.type === 'element') {
              const {objectId} = result
              const {nodeId} = await domElement._client.DOM.requestNode({objectId})
              return new living[result.className](domElement._client, {nodeId})
            }
          })
      }
      if (!property.setter) {
        exports.define(
          object, {
            get [property.name] () {
              return getter.call(this)
            }
          }
        )
      } else {
        exports.define (
          object, {
            get [property.name] () {
              return getter.call(this)
            },
            set [property.name] (value) {
              if (!['string', 'boolean', 'number'].includes(typeof value)) {
                return Promise.reject(new Error('Only native arguments supported'))
              }
              const element = this
              return Promise.resolve()
                .then(async function () {
                  const {Runtime} = element._client
                  const objectId = await element._objectId
                  const {result} = await Runtime.callFunctionOn({
                    objectId,
                    functionDeclaration: `function (value) {
                      return this.${property.name} = value
                    }`,
                    arguments: [{value}]
                  })
                  if (property.type === result.type) {
                    // TODO throw error instead
                    return result.value
                  }
                })
            }
          }
        )
      }
    } else {
      throw new Error('Property type not defined', property.type)
    }
  }
}
exports.mixin = function mixin(target, source) {
  const keys = Object.getOwnPropertyNames(source)
  for (let i = 0; i < keys.length; ++i) {
    if (keys[i] in target) {
      continue
    }

    Object.defineProperty(target, keys[i], Object.getOwnPropertyDescriptor(source, keys[i]))
  }
}


exports.clientSymbol = Symbol('Remote client')

living = require('./living')