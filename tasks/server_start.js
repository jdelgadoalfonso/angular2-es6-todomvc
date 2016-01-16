'use strict';
let nodemon = require('gulp-nodemon');

module.exports = function() {
  return function() {
    return nodemon({
      script: 'server/index.js',
      watch: ['server'],
      ignore: ['node_modules/**'],
      ext: 'js html css',
      env: {
        NODE_ENV: 'development',
      },
    });
  };
};
