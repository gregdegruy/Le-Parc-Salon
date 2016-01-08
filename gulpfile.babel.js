'use strict';

const gulp = require('gulp');

const babel = require('gulp-babel');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const sourcemaps = require("gulp-sourcemaps");
const uglify = require('gulp-uglify');

/**
 * CSS compile tasks 
 */
gulp.task('sass', function () {                  
    return gulp.src('./src/development/css/sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/development/css/'))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./src/production/css/'));
});
gulp.task('sass:watch', function () {
   return gulp.watch('./src/development/css/sass/**/*.scss', ['sass']);
});

/**
 * JS compile tasks 
 */
gulp.task('babel', function () {
  return gulp.src('./src/development/js/**/*.js')
    .pipe(sourcemaps.init())    
    .pipe(concat('app.js'))
    .pipe(babel({
        presets: ['es2015']  
    }))    
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./src/development/'));
});

/**
 * Default task
 */
gulp.task('default', function () {
  console.log('✩ Greg Universe ✩');
});
