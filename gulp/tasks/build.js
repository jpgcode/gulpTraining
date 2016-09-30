'use strict';

var gulp  = require('gulp');

//Build task, run it when the project is ready to go to PROD
gulp.task('build', ['less', 'sass', 'pug', 'imagemin', 'copy'],function() { 
	console.log('Running the build task...');
});