const assert = require('chai').assert
const chromeHelpers = require('../chrome-helper')
// TODO chai helpers
const CDP = require('chrome-remote-interface')
const describe = require('mocha-sugar-free').describe
const it = require('mocha-sugar-free').it
const beforeEach = require('mocha-sugar-free').beforeEach
const afterEach = require('mocha-sugar-free').afterEach

const remoteDom = require('../..')

describe('jsdom/selectors', function () {
  let tab, client
  afterEach(function () {
    if (tab) CDP.Close({id: tab.id})
    if (client) client.close()
    tab = null
    client = null
  })
  it('div:last-child > span[title]', async function () {
    ({client, tab} = await chromeHelpers.getClientFromHTML("<div><div><span title='title text'>text</span></div></div>"))
    const window = await remoteDom.env(client)
    const document = window.document
    const firstChild = await document.firstElementChild
    await firstChild.querySelector('div:last-child > span[title]')
  })
})
