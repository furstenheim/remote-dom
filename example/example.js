const remoteDom = require('./../index')
const CDP = require('chrome-remote-interface')
main()

async function main () {
  let client
  let tab
  try {

    const url = 'https://chromium.org'
    console.log('lets create tab')
    tab = await CDP.New()
    console.log('tab created')
    client = await CDP({tab})
    process.on('exit', function () {
      if (client) client.close()
    })
    const {Runtime, Console, Page} = client
    await Runtime.enable()
    await Console.enable()
    await Page.enable()
    Page.loadEventFired(function () {
      browsePage(client, tab)
    })
    await Page.navigate({url})
    Runtime.consoleAPICalled(function ({args}) {
      console.log(args)

    })


  } catch (e) {
    console.error(e)
    if (tab) CDP.Close({id: tab.id})
    if (client) client.close()
  }
}

async function browsePage (client, tab) {
  try {
    const window = await remoteDom.env(client)
    const selection = await window.document.querySelectorAll('a')
    for (const element of selection) {
      const html = await selection[0].outerHTML
      console.log(html)
    }
  } catch (e){
    console.error(e)
  } finally {
    if (tab) CDP.Close({id: tab.id})
    if (client) client.close()
  }
}

process.on('unhandledRejection', function (r) {
  console.error(r)
})