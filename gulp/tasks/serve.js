'use strict';

var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
var config      = require('../config');


//Serve task, run it while you're in development mode
gulp.task('serve', ['less', 'sass', 'pug'] , function() {
    
    //Browsersync server
    browserSync.init({
        server: {
            baseDir: ['./build', './app']
        }
    });

    //Preprocessor tasks
    gulp.watch(config.watchPaths.pug, ['pug']);
    gulp.watch(config.filePaths.js, ['lint', 'babel']);
    gulp.watch(config.filePaths.sass, ['sass']);
    gulp.watch(config.filePaths.less, ['less']);
    
    //Reload on change
    gulp.watch([config.watchPaths.html, config.watchPaths.css, config.filePaths.js]).on('change', reload);
    
});