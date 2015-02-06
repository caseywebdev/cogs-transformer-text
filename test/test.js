var helper = require('cogs-test-helper');

helper.run({
  'test/config.json': {
    'test/input.txt': {
      path: 'test/input.txt',
      buffer: helper.getFileBuffer('test/output.js'),
      hash: helper.getFileHash('test/output.js'),
      requires: [{
        path: 'test/input.txt',
        hash: helper.getFileHash('test/input.txt')
      }],
      links: [],
      globs: []
    }
  }
});
