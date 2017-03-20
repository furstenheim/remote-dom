exports.define = function define (object, properties) {
  for (const name of Object.getOwnPropertyNames(properties)) {
    const propDesc = Object.getOwnPropertyDescriptor(properties, name)
    Object.defineProperty(object, name, propDesc)
  }
}

exports.defineRemoteProperties = function defineRemoteProperties (object, properties) {
  for (const property of properties) {
    if (property.type === 'function') {
      exports.define(
        object, {
          async [property.name] () {
            if (arguments.length) return Promise.reject(new Error('Argument functions not yet supported'))
            const {Runtime} = this._client
            const objectId = await this._objectId
            await Runtime.callFunctionOn({
              objectId,
              functionDeclaration: `function () {
                return this.${property.name}()
              }`
            })
          }
        }
      )
    } else if (property.type === 'string') {
      exports.define(
        object, {
          get [property.name] () {
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
              return result.value
            })
          }
        }
      )
    } else if (property.type === 'number') {
      exports.define(
        object, {
          get [property.name] () {
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
                return result.value
              })
          }
        }
      )
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