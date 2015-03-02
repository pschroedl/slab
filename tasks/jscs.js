var gulp = require('gulp');
var jscs = require('gulp-jscs');

gulp.task('jscs', function() {
    gulp.src('src/client/js/*.js')
        .pipe(jscs());
});