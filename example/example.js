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
      const html = await element.outerHTML
      //await element.remove()
    }
    const firstElement = selection[selection.length - 1]
    const html = await firstElement.outerHTML
    console.log('click' in firstElement)
    const localName = await firstElement.localName
    const prefix = await firstElement.prefix
    const innerHTML = await firstElement.innerHTML
    const classList = await firstElement.classList
    console.log(localName)
    console.log(innerHTML)
    console.log(classList)
    const clientRect = await firstElement.getBoundingClientRect()
    const top = await clientRect.top
    console.log(top)
    await firstElement.click()
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