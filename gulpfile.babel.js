'use strict';

const gulp = require('gulp');

const babel = require('gulp-babel');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const sourcemaps = require("gulp-sourcemaps");
const uglify = require('gulp-uglify');
const webserver = require('gulp-webserver');

const dirs = {
    src: './src/development'
};

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
    return gulp.src(`${dirs.src}/css/sass/main.scss`)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(`${dirs.src}/css/`))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./src/production/css/'));
});
gulp.task('sass:watch', () => {
   return gulp.watch(`${dirs.src}/css/sass/**/*.scss`, ['sass']);
});

/**
 * JS compile tasks 
 */
gulp.task('babel', () => {
  return gulp.src([
        './dependencies/headroom/headroom.min.js',
        `${dirs.src}/js/modules/**/*.js`  
    ])
    .pipe(sourcemaps.init())    
    .pipe(concat('Main.js'))
    .pipe(babel({
        presets: ['es2015']  
    }))    
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(`${dirs.src}/js`));
});

/**
 * Server Tasks
 */
gulp.task('server', () => {
  gulp.src('./')
    .pipe(webserver({
      open: true
    }));
});
