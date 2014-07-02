var toLog = require('../lib');
var demand = require('must');

describe('to-log', function () {
  it('should exist', function () {
    demand(toLog).to.exist();
  });
});
