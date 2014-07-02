var toLog = require('../lib');
var demand = require('must');
var stream = require('stream');

describe('to-log', function () {
  describe('when activated', function () {
    var stdout, stderr,
      origStdout = process.stdout.write,
      origStderr = process.stderr.write;

    var reset = function () {
      process.stdout.write = origStdout;
      process.stderr.write = origStderr;
    };

    beforeEach(function () {
      toLog({
        stdout: stdout = new stream.PassThrough(),
        stderr: stderr = new stream.PassThrough()
      });
    });

    afterEach(reset);

    it('redirects console.log to a specified stream', function () {
      console.log("This is a test log.");
      reset();
      demand(stdout.read(19).toString()).to.equal("This is a test log.");
    });

    it('redirects console.error to a specified stream', function () {
      console.error("This is a test error.");
      reset();
      demand(stderr.read(21).toString()).to.equal("This is a test error.");
    });
  });
});
