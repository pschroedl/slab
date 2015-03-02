var browserify = require('gulp-browserify');
var gulp = require('gulp');
var rename = require('gulp-rename');
var livereload = require('gulp-livereload');

gulp.task('browserify', function() {
  gulp.src(['src/client/js/'], {read: false})
    .pipe(browserify({
      debug: true
    }))
    .on('prebundle', function(bundler) {
      // expose modules like React externally for dev tools
      //bundler.require('react');
    })
    .pipe(rename('src.js'))
    .pipe(gulp.dest('public/js/'))
    // Reload browser via livereload plugin
    .pipe(livereload());
});