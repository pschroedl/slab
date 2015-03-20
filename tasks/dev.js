var gulp = require('gulp');

gulp.task('dev', ['lint', 'jscs', 'test', 'build', 'watch']);