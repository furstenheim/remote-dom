## Remote DOM
The aim of this library is to allow (almost) seamless interaction with the DOM through the debugging protocol. It is under development, but it is already capable of the following (take a look at example/example.js)


```
  const remoteDom = require('remote-dom')
  const client = someChromeDebuggingClient
  async function doSomethingOnTheWeb () {
    const {window, document} = await remoteDom.env(client)
    const linkElement = await document.querySelectorAll('a')
    const html = await linkElement.outerHTML
  }
  
```

### Motivation

Migrating chrome extensions to work in Chrome Headless. 

A nice feature of Chrome Extensions is that they are provided with a different js environment as the webpage and access to the DOM. Although Chrome Headless has no plans of supporting extensions, it is possible to access the DOM through the protocol. This library abstracts that protocol so that the interface is the same as the usual DOM manipulation. Only caveat is that all iteractions are async so they return a promise that resolves in the requested value.

### Useful links
* https://chromedevtools.github.io/debugger-protocol-viewer/1-2/DOM/

### Credit
This project is heavily inspired on [jsdom](https://github.com/tmpvar/jsdom)