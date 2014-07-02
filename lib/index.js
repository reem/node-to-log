function toLog(opts) {
  if (opts.stdout || toLog.stdout) {
    process.stdout.write = function (data) {
      (opts.stdout || toLog.stdout).write(data);
    };
  }

  if (opts.stderr || toLog.stderr) {
    process.stderr.write = function (data) {
      (opts.stderr || toLog.stderr).write(data);
    };
  }
}

module.exports = exports = toLog;

