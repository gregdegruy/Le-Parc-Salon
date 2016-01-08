'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

/**
 * CSS compile tasks 
 */
gulp.task('sass', function () {                  
    gulp.src('./src/development/css/sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/development/css/'))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./src/production/css/'));
});
gulp.task('sass:watch', function () {
   gulp.watch('./src/development/css/sass/**/*.scss', ['sass']);
});

/**
 * JS compile tasks 
 */


/**
 * Default task
 */
gulp.task('default', function () {
  console.log('✩ Greg Universe ✩');
});
