module.exports = {
  getChrome,
  getClientFromHTML
}

const CDP = require('chrome-remote-interface')

async function getChrome () {
  const tab = await CDP.New()
  const client = await CDP({tab})
  const {Runtime, Page} = client
  await Runtime.enable()
  await Page.enable()
  return {client, tab}
}

// TODO probably move to the library
async function getClientFromHTML (html) {
  const {tab, client} = await getChrome()
  const {Page} = await client
  const {frameId} = await Page.navigate({url: 'about:blank'})
  await Page.setDocumentContent({frameId, html})
  return {client, tab}
}