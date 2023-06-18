/**
 * Gulpfile.
 *
 * @author kkorolev.com
 * @version 1.0.0
 */

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const webp = require('gulp-webp');
const htmlmin = require('gulp-htmlmin');
const connect = require('gulp-connect');
const browserSync = require('browser-sync').create();

gulp.task('build', function () {
    return gulp.src('./src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions']
        }))
        .pipe(gulp.dest('./dist'))
});
