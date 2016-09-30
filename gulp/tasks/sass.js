'use strict';

var gulp   = require('gulp');
var sass   = require('gulp-sass');
var config = require('../config');

gulp.task('sass', function() { 
	return gulp.src(config.filePaths.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(config.destFolders.css));
});