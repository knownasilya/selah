'use strict';

var gulp = require('gulp');
var livereload = require('gulp-livereload');
var noop = require('gulp-util').noop;
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var bundleLogger = require('../utils/bundle-logger');
var cli = require('minimist')(process.argv.slice(2));
var Gaze = require('gaze').Gaze;
var entryFile = './client/.index.js';
var watchifyOptions = {
  cache: {},
  packageCache: {},
  fullPaths: true,
  debug: !cli.production
};

gulp.task('browserify', ['emberate'], function () {
  // see http://stackoverflow.com/q/24170445/483616
  var bundler = cli.watch ? watchify(browserify(entryFile, watchifyOptions)) : browserify(entryFile, {
    debug: !cli.production
  });
  var gaze;

  var bundle = function () {
    bundleLogger.start();

    return bundler
      .bundle()
      .pipe(source('application.js'))
      .pipe(gulp.dest('./dist/scripts'))
      .on('end', bundleLogger.end)
      .pipe(cli.watch ? livereload() : noop());
  };

  if (cli.watch) {
    // Run emberate once files are added/deleted
    gaze = new Gaze('client/**/*.js');

    gaze.on('all', function (event, filePath) {
      if (event === 'added' || event === 'deleted') {
        console.log('Emberate Added/Removed: ', filePath);
        gulp.start('emberate');
      }
    });

    // Rebundle with watchify on changes.
    bundler.on('update', function (ids) {
      console.log('Browserify changed: ', ids);
      bundle(ids);
    });
  }

  return bundle();
});
