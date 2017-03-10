## Remote DOM
The aim of this library is to allow interaction with the DOM through the debugging protocol (almost) seamlessly. Once it is done it should work as:

```
  const remoteDom = require('remote-dom')
  const client = someChromeDebuggingClient
  async function doSomethingOnTheWeb () {
    const {window, document} = await remoteDom.env(client)
    const elementList = await document.querySelectorAll('.some-class')
    ....
  }
  
```

### Useful links
* https://chromedevtools.github.io/debugger-protocol-viewer/1-2/DOM/