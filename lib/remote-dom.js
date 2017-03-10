const Window = require('./remote-dom/browser/Window')

const remoteDom = {
  env: createRemoteDom
}

module.exports = remoteDom

async function createRemoteDom (client) {
  const window = await Window(client)
  return window

}