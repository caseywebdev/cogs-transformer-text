const _ = require('underscore');

const DEFAULTS = {
  before: 'export default ',
  after: ';\n'
};

module.exports = (file, options, cb) => {
  try {
    options = _.extend({}, DEFAULTS, options);
    const source = JSON.stringify(file.buffer.toString());
    cb(null, {buffer: new Buffer(options.before + source + options.after)});
  } catch (er) { cb(er); }
};
