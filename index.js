const _ = require('underscore');

const DEFAULTS = {
  before: 'export default ',
  after: ';\n'
};

module.exports = ({file: {buffer}, options}) => {
  const {before, after} = _.extend({}, DEFAULTS, options);
  const source = JSON.stringify(buffer.toString());
  return {buffer: new Buffer(before + source + after)};
};
