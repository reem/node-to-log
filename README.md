# to-log [![Build Status](https://secure.travis-ci.org/reem/to-log.png?branch=master)](https://travis-ci.org/reem/to-log)

Quickly redirect console.log and console.error to files.

## Install

```bash
npm install --save to-log
```

## Example

```javascript
var toLog = require('to-log');
var fs = require('fs');

toLog({
  stdout: fs.createWriteStream('your-log-file.txt'),
  stderr: fs.createWriteStream('your-error-file.txt')
});

console.log("Hello!"); // Logged to your-log-file.txt
console.error("Something bad happened!"); // Logged to your-error-file.txt

```

## License

MIT
