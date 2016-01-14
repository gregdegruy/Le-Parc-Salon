'use strict';

const gulp = require('gulp');

const babel = require('gulp-babel');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const sourcemaps = require("gulp-sourcemaps");
const uglify = require('gulp-uglify');
const webserver = require('gulp-webserver');

/**
 * Default task
 */
gulp.task('default', () => {
  console.log('✩ Greg Universe ✩');
});

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
        './dependencies/headroom/headroom.min.js',
        './src/development/js/modules/**/*.js'  
    ])
    .pipe(sourcemaps.init())    
    .pipe(concat('Main.js'))
    .pipe(babel({
        presets: ['es2015']  
    }))    
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./src/development/js'));
});

/**
 * Tasks from Angular2 Yoeman Scaffolding
 */
gulp.task('server', () => {
  gulp.src('./')
    .pipe(webserver({
      open: true
    }));
});
