const _ = require('lodash')

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
            if (returnType === 'boolean') {
              // TODO throw error if type does not match
              return result.value
            }
          }
        }
      )
    } else if (property.type === 'string' || property.type === 'boolean' || property.type === 'number') {
      function getter () {
        const domElement = this
        console.log(domElement)
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
            return result.value
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