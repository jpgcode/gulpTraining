'use strict';

var gulp  = require('gulp');
var config = require('../config');

//Copy task, move any file in here
gulp.task('copy', function() { 
	return gulp.src(config.filePaths.js)
        .pipe(gulp.dest(config.destFolders.js));
});