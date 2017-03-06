const remoteDom = require('./../index')
const CDP = require('chrome-remote-interface')
main()
async function main () {
  let client
  let tab
  try {

    const url = 'https://chromium.org'
    tab = await CDP.New()
    client = await CDP({tab})
    const {Runtime, Console, Page} = client
    await Runtime.enable()
    await Console.enable()
    await Page.enable()
    Runtime.consoleAPICalled(function ({args}) {
      console.log(args)

    })
    const {window, document} = await remoteDom.env(client)
    console.log(document)
  } catch (e) {
    console.error(e)
  } finally {
    if (tab) CDP.Close({id: tab.id})
    if (client) client.close()
  }
}