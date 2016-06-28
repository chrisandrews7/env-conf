# Environment Configuration

A simple node.js environment variable config loader inspired by The Twelve Factor App

[![Build
Status](https://travis-ci.org/chrisandrews7/enviro-conf.svg?branch=master)](https://travis-ci.org/chrisandrews7/enviro-conf) [![Coverage Status](https://coveralls.io/repos/github/chrisandrews7/enviro-conf/badge.svg?branch=master)](https://coveralls.io/github/chrisandrews7/enviro-conf?branch=master) [![npm version](https://img.shields.io/npm/v/enviro-conf.svg?style=flat)](https://www.npmjs.com/package/enviro-conf)

## Installation

```shell
$ npm install enviro-conf --save
```

## Usage

**Setup environment variables:**

```shell
$ export PORT=3000 FEATURE=something
```

**Accessing config properties:**

```js
var config = require('enviro-conf');
//...
var port = config.get('PORT');
server.listen(port, ...);
```

`config.get()` will throw an exception for undefined keys to help catch typos and missing values.

**Check if config properties exist:**

```js
var config = require('enviro-conf');
//...
if (config.has('FEATURE')) {
  var detail = config.get('FEATURE');
  //...
}
```

## Tests

```shell
$ npm test
```

## Inspiration

* [12 Factor App](http://12factor.net/config)
* [Node Config](https://github.com/lorenwest/node-config)
