'use strict';

var gulp = require('gulp');
var source = require('vinyl-source-stream');
var emberate = require('emberate');

gulp.task('emberate:viewer', function () {
  return emberate('./viewer')
    .pipe(source('.index.js'))
    .pipe(gulp.dest('./viewer'));
});
