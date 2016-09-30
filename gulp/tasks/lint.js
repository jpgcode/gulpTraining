'use strict';

var gulp   = require('gulp');
var eslint = require('gulp-eslint');
var config = require('../config');

gulp.task('lint', function() {
    return gulp.src([config.filePaths.js,'!node_modules/**'])
        .pipe(eslint({
		    'parserOptions': {
		        'ecmaVersion': 6,
		        'sourceType': 'module'
		    },
		    'rules': {
		        'semi': 1
		    }
		}))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});