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
var entryFile = './viewer/.index.js';
var watchifyOptions = {
  cache: {},
  packageCache: {},
  fullPaths: true,
  debug: !cli.production
};

gulp.task('browserify:viewer', ['emberate:viewer'], function () {
  // see http://stackoverflow.com/q/24170445/483616
  var bundler = cli.watch ? watchify(browserify(entryFile, watchifyOptions)) : browserify(entryFile, {
    debug: !cli.production
  });
  var gaze;

  var bundle = function () {
    bundleLogger.start();

    return bundler
      .bundle()
      .pipe(source('viewer.js'))
      .pipe(gulp.dest('./dist/scripts'))
      .on('end', bundleLogger.end)
      .pipe(cli.watch ? livereload() : noop());
  };

  if (cli.watch) {
    // Run emberate once files are added/deleted
    gaze = new Gaze('viewer/**/*.js');

    gaze.on('all', function (event, filePath) {
      if (event === 'added' || event === 'deleted') {
        console.log('Emberate:Viewer Added/Removed: ', filePath);
        gulp.start('emberate:viewer');
      }
    });

    // Rebundle with watchify on changes.
    bundler.on('update', function (ids) {
      console.log('Browserify:Viewer changed: ', ids);
      bundle(ids);
    });
  }

  return bundle();
});
