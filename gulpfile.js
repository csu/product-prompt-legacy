var gulp = require('gulp'),
    minifyHTML = require('gulp-minify-html'),
    minifyCSS = require('gulp-minify-css'),
    rename = require("gulp-rename"),
    uglify = require('gulp-uglify');

gulp.task('default', ['index']);
gulp.task('build', ['index']);

gulp.task('index', function() {
    gulp.src('./src/index.html')
        .pipe(minifyHTML())
        .pipe(rename('index.html'))
        .pipe(gulp.dest('.'))
    gulp.src('./src/index.css')
        .pipe(minifyCSS())
        .pipe(rename('index.css'))
        .pipe(gulp.dest('./assets/css'))
    gulp.src('./src/index.js')
        .pipe(uglify())
        .pipe(rename('index.js'))
        .pipe(gulp.dest('./assets/js'))
});