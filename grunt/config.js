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

  // All files that should be checked with JSHint
  jsHintFiles: [
    'Gruntfile.js',
    'src/**/*.js',
    '!src/dist/**/*.js',
    'test/*.js'
  ],

  // JavaScript files
  js: {
    files: [
      'src/js/**/*.js',
      'src/modules/**/*.js'
    ],
    dev: {
      entry: 'src/js/main.js',
      dest: 'src/dist/index.js'
    },
    build: {
      entry: 'src/js/main.js',
      dest: 'dist/<%= pkg.version %>/main.min.js',
    },
    test: {
      entry: 'test/main.js',
      dest: 'test/dist/test.js',
    },
    libs: [
      'node_modules/grunt-modernizr/lib/modernizr-dev.js'
    ]
  },

  // CSS files
  css: {
    files: [
      'src/css/**/*.css'
    ],
    src: 'src/css/main.css',
    devDest: 'src/dist/main.css',
    dest: 'dist/<%= pkg.version %>/main.min.css'
  },

  // Modernizr files
  modernizr: {
    dev: 'node_modules/grunt-modernizr/lib/modernizr-dev.js',
    devDest: 'dist/js/modernizr.js',
    dest: 'dist/<%= pkg.version %>/modernizr.min.js'
  },

  // Images
  img: {
    src: 'src/img/',
    dest: 'dist/img/'
  },

  // Apache Server Configs
  htaccess: {
    src: 'node_modules/apache-server-configs/dist/.htaccess',
    dest: 'dist/.htaccess',
  },

  tests: {
    specs: [
      'src/modules/**/*spec.js'
    ],
    coverage: 'test/coverage/'
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
      maincss: 'dist/main.css',
      modernizr: '../node_modules/grunt-modernizr/lib/modernizr-dev.js',
      mainjs: '<script src="dist/index.js"></script>'
    }
  }
};
