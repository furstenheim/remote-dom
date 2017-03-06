
const remoteDom = {
  env: createRemoteDom
}

module.exports = remoteDom
async function createRemoteDom (client) {
  return {window: null, document: null}

}