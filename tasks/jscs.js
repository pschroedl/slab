var gulp = require('gulp');
var jscs = require('gulp-jscs');
var jshint = require('gulp-jshint');

gulp.task('jscs', function() {
	gulp.src(([
			'src/client/*.js',
			'src/server/*.js',
			'spec/client/*.js',
			'spec/server/*.js',
			'tasks/*.js'
		]))
		.pipe(jscs())
		.pipe(jshint.reporter('fail'));
});
