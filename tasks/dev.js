var gulp = require('gulp');

gulp.task('dev', ['lint', 'jscs', 'browserify', 'watch']);