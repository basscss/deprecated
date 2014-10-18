
var gulp = require('gulp');
var basswork = require('gulp-basswork');
var rename = require('gulp-rename');
var mincss = require('gulp-minify-css');

gulp.task('default', function() {
  gulp.src('./index.css')
    .pipe(basswork())
    .pipe(rename('flex-object.css'))
    .pipe(gulp.dest('./css'))
    .pipe(mincss())
    .pipe(rename('flex-object.min.css'))
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', ['default'], function() {
  gulp.watch(['./index.css', './lib/*.css'], ['default']);
});

