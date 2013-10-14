/**
 * Copy task
 */
'use strict';

var config = require('../config');

module.exports = {
	deploy: {
		files: [{
			src: config.js.files,
			dest: config.destDir
		}]
	}
};
