'use strict';

var gulp   = require('gulp');
var less   = require('gulp-less');
var path   = require('path');
var config = require('../config');

gulp.task('less', function () {
	return gulp.src(config.filePaths.less)
	.pipe(less())
	.pipe(gulp.dest(config.destFolders.css));
});