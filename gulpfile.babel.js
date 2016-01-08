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
gulp.task('sass', () => {                  
    return gulp.src('./src/development/css/sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/development/css/'))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./src/production/css/'));
});
gulp.task('sass:watch', () => {
   return gulp.watch('./src/development/css/sass/**/*.scss', ['sass']);
});

/**
 * JS compile tasks 
 */
gulp.task('babel', () => {
  return gulp.src([
        './dependencies/headroom/headroom.js',
        './src/development/js/modules/**/*.js'  
    ])
    .pipe(sourcemaps.init())    
    .pipe(concat('main.js'))
    .pipe(babel({
        presets: ['es2015']  
    }))    
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./src/development/js'));
});

/**
 * Default task
 */
gulp.task('default', () => {
  console.log('✩ Greg Universe ✩');
});
