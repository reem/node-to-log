var toLog = require('to-log');
var fs = require('fs');

toLog({
  stdout: fs.createWriteStream('your-log-file.txt'),
  stderr: fs.createWriteStream('your-error-file.txt')
});

console.log("Hello!"); // Logged to your-log-file.txt
console.error("Something bad happened!"); // Logged to your-error-file.txt

