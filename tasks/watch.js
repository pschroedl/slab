var gulp = require('gulp');
var livereload = require('gulp-livereload');
var srcFiles = [
	'src/client/*.js',
	'src/client/*.js',
	'spec/client/*.js',
	'spec/server/*.js',
	'public/index.html'
];

gulp.task('watch', function() {
	livereload.listen();
	gulp.watch(srcFiles, ['lint', 'jscs', 'test', 'build']);
});
