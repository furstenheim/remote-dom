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

### Useful links
* https://chromedevtools.github.io/debugger-protocol-viewer/1-2/DOM/

### Credit
This project is heavily inspired on [jsdom](https://github.com/tmpvar/jsdom)