var gulp = require('gulp');
var jshint = require('gulp-jshint');
var map = require('map-stream');
var srcFiles = [
	'src/client/*.js',
	'src/server/*.js',
	'spec/client/*.js',
	'spec/server/*.js',
	'tasks/*.js'
];

gulp.task('lint', function(){
	gulp.src(srcFiles)
		.pipe(jshint('.jshintrc'))
		.pipe(jshint.reporter('jshint-stylish'))
		// .pipe(errorReporter());
		.pipe(jshint.reporter('fail'));
});

gulp.task('lint_error_out', function(){
	gulp.src(srcFiles)
		.pipe(jshint('.jshintrc'))
		.pipe(jshint.reporter('jshint-stylish'))
		.pipe(errorReporter());
		// .pipe(jshint.reporter('fail'));
});

var errorReporter = function(){
	return map(function(file, cb){
		if (!file.jshint.success) {
			process.exit(1);
		}
		cb(null, file);
	});
};
