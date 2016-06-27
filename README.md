# Environment Configuration

A simple node.js config loader of environment variables inspired by The Twelve Factor App

## Installation

```shell
$ npm install env-conf --save
```

## Usage

**Setup environment variables:**

```shell
$ PORT=3333 SSL=false node yourAppName
```

**Accessing config variables:**

```js
var config = require('env-conf');
//...
var port = config.get('PORT');
server.listen(port, ...);
```

`config.get()` will throw an exception for undefined keys to help catch typos and missing values.

**Checking if config variables exist:**

```js
var config = require('env-conf');
//...
if (config.has('SSL')) {
  var port = config.get('PORT');
  server.listen(port, ...);
  //...
}
```

## References

* [12 Factor App](http://12factor.net/config)
