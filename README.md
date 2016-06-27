# Env Conf

Simple node.js config loader inspired by The Twelve-Factor App

## Usage

**Setup some environment variables:**

```shell
$ PORT=3333 node app.js
```

**Access the config in your app:**

```js
var config = require('env-conf');
//...
var port = config.get('PORT');
server.listen(port, ...);
```

`config.get()` will throw an exception for undefined keys to help catch typos and missing values.

## References

* [12 Factor App](http://12factor.net/config)
