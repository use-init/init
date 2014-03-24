/**
 * JSHint taks configuration
 */
'use strict';

var config = require('../config');

module.exports = {
	all: config.jsHintFiles,
	options: {
		jshintrc: '.jshintrc'
	}
};
