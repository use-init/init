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


  requirejs: '../../node_modules/requirejs/require',

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
      'src/js/**/*.js',
      'src/modules/**/*.js'
    ],
    config: 'src/js/config.js',
    dest: 'dist/<%= pkg.version %>/main.min.js',
    libs: [
      'node_modules/grunt-modernizr/lib/modernizr-dev.js',
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/requirejs/require.js'
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
    src: 'src/modules/**/*spec.js',
    config: 'test/test-main.js',
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
      mainjs: '<script data-main="js/config" src="../node_modules/requirejs/require.js"></script>'
    }
  },

  // Static Site Generator
  generator: {
    files: {
      cwd: 'src/pages',
      src: '**/*',
      dest: 'dist/',
      ext: '.html'
    },
    options: {
      partialsglob: 'pages/partials/*.html',
      templates: 'templates',
      environment: 'dev'
    }
  }
};
