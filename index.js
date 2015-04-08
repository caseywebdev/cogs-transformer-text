var _ = require('underscore');
var babel = require('cogs-transformer-babel');

var DEFAULTS = {
  modules: 'umd'
};

module.exports = function (file, options, cb) {
  var source = 'export default ' + JSON.stringify(file.buffer.toString());
  options = _.extend({}, DEFAULTS, options);
  babel(_.extend({}, file, {buffer: new Buffer(source)}), options, cb);
};
