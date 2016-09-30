'use strict';

var gulp     = require('gulp');
var imagemin = require('gulp-imagemin');
var config   = require('../config'); 

//Imagemin task compress images
gulp.task('imagemin', function(){
    return gulp.src(config.filePaths.images)
        .pipe(imagemin())
        .pipe(gulp.dest(config.destFolders.images))
});