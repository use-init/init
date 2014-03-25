/**
 * Concatenate pages
 */
'use strict';

var xtend = require('xtend');
var pages = require('../../pages');
var config = require('../config');

module.exports = xtend(pages, config.concat || {});
