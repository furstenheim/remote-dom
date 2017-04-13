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
  it("div[title='']", async function () {
    ({client, tab} = await chromeHelpers.getClientFromHTML(`<!doctype html><html><head></head><body>
      <div></div><div title=""></div><div title="yes"></div>
    </body></html>`))
    const {document} = await remoteDom.env(client)
    const firstSelection = await document.querySelectorAll("div[title='']")
    assert.strictEqual(firstSelection.length, 1)
    const secondSelection = await document.querySelectorAll("div[title][title='']")
    assert.strictEqual(secondSelection.length, 1);
  })
  it('matches smote test', async function () {
    ({client, tab} = await chromeHelpers.getClientFromHTML(`<html><body><div id="main"><p class="foo">Foo</p><p>Bar</p></div></body></html>`))
    const {document} = await remoteDom.env(client)
    const div = await document.querySelector('#main')
    const element = await document.querySelector("#main p")
    assert.strictEqual(await element.matches("#main p"), true, "p and first-p")
    assert.strictEqual(await element.matches("#asdf"), false, "doesn't match wrong selector")

    const element2 = await div.querySelector("p")
    assert.strictEqual(await element2.matches("p"), true, "p and first-p");
    assert.strictEqual(await element2.matches("#asdf"), false, "doesn't match wrong selector")

    const element3 = await document.querySelector("#main p:not(.foo)")
    assert.strictEqual(await element3.matches("#main p:not(.foo)"), true, "p and second-p")
    assert.strictEqual(await element3.matches("#asdf"), false, "doesn't match wrong selector")
  })
})
