'use strict';

var gulp = require('gulp');

gulp.task('default', ['lint', 'less', 'less:viewer', 'browserify', 'browserify:viewer', 'watch']);
