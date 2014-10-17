
var gulp = require('gulp');
var basswork = require('gulp-basswork');

gulp.task('default', function() {
  gulp.src('./index.css')
    .pipe(basswork())
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', ['default'], function() {
  gulp.watch(['./index.css', './lib/*.css'], ['default']);
});

