var gulp = require('gulp');
var livereload = require('gulp-livereload');

gulp.task('watch', function(){
	livereload.listen();
	gulp.watch( ['src/client/*.js','src/client/*.js','public/index.html'], ['lint', 'jscs', 'test', 'build'] );
});