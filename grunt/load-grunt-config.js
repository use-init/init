/**
 * Load grunt configuration
 */
'use strict';

/**
 * Load configuration files for Grunt
 * @param  {string} path Path to folder with tasks
 * @return {object}      All options
 */
module.exports = function (path) {
  var glob = require('glob');
  var object = {};
  var key;

  glob.sync('*', { cwd: path }).forEach(function (option) {
    key = option.replace(/\.js$/,'');
    object[key] = require('../' + path + '/' + option);
  });

  return object;
};
