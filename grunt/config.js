/**
 * Grunt configuration
 */
'use strict';

var pkg = require('../package');

module.exports = {

  // A banner for distributed files (name, version, license, date)
  banner: '/*! ' + pkg.name + ' - v' + pkg.version + ' - MIT License - ' +
    '<%= grunt.template.today("yyyy-mm-dd") %> */',

  srcDir: 'src/',
  destDir: 'dist/',

  requirejs: '../../bower_components/requirejs/require',

  // All files that should be checked with JSHint
  jsHintFiles: [
    'Gruntfile.js',
    'src/**/*.js',
    'test/*.js',
    'test/specs/**/*.js'
  ],

  // JavaScript files
  js: {
    files: [
      'src/js/**/*.js'
    ],
    config: 'src/js/config.js',
    dest: 'dist/<%= pkg.version %>/main.min.js'
  },

  // Sass files
  sass: {
    files: [
      'scss/**/*.scss'
    ],
    src: 'scss/main.scss',
    devDest: 'src/css/main.css',
    dest: 'dist/<%= pkg.version %>/main.min.css'
  },

  // Modernizr files
  modernizr: {
    src: 'bower_components/modernizr/modernizr.js',
    dest: 'dist/<%= pkg.version %>/modernizr.min.js'
  },

  // Images
  img: {
    src: 'src/img/',
    dest: 'dist/img/'
  },

  tests: {
    src: 'test/specs/**/*spec.js',
    config: 'test/test-main.js'
  },

  // Versioned references
  replace: {
    build: {
      src: 'temp/**/*.html',
      dest: 'dist/',
      maincss: '<%= pkg.version %>/main.min.css',
      modernizr: '<%= pkg.version %>/modernizr.min.js',
      mainjs: '<script src="<%= pkg.version %>/main.min.js"></script>'
    },

    dev: {
      src: 'temp/**/*.html',
      dest: 'src/',
      maincss: 'css/main.css',
      modernizr: '../bower_components/modernizr/modernizr.js',
      mainjs: '<script data-main="js/config" src="../bower_components/requirejs/require.js"></script>'
    }
  }
};
