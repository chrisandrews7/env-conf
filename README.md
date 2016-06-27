# Environment Configuration

A simple node.js environment variables config loader inspired by The Twelve Factor App

[![Build
Status](https://travis-ci.org/chrisandrews7/env-conf.svg?branch=master)](https://travis-ci.org/chrisandrews7/env-conf) [![Coverage Status](https://coveralls.io/repos/github/chrisandrews7/env-conf/badge.svg?branch=master)](https://coveralls.io/github/chrisandrews7/env-conf?branch=master)

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
