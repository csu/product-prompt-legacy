var gulp = require('gulp'),
    minifyHTML = require('gulp-minify-html'),
    minifyCSS = require('gulp-minify-css'),
    rename = require("gulp-rename");

gulp.task('index', function() {
    gulp.src('./src/index.html')
        .pipe(minifyHTML())
        .pipe(rename('index.html'))
        .pipe(gulp.dest('.'))
    gulp.src('./src/index.css')
        .pipe(minifyCSS())
        .pipe(rename('index.css'))
        .pipe(gulp.dest('.'))
});

gulp.task('build', function() {
    gulp.src('./src/index.html')
        .pipe(minifyHTML())
        .pipe(rename('index.html'))
        .pipe(gulp.dest('.'))
    gulp.src('./src/index.css')
        .pipe(minifyCSS())
        .pipe(rename('index.css'))
        .pipe(gulp.dest('.'))
});
