'use strict';

var gulp           = require('gulp');
var pug            = require('gulp-pug');
var config         = require('../config');

gulp.task('pug', function buildHTML() {
	return gulp.src(config.filePaths.pug)
	.pipe(pug())
	.pipe(gulp.dest(config.distFolder));
});