var gulp = require('gulp');
var symlink = require('gulp-symlink');

gulp.task('setup_hooks', function() {
	return gulp.src('tasks/precommit.sh')
		.pipe(symlink('.git/hooks/pre-commit', 'pre-commit'));
});

gulp.task('hook_tasks', ['jscs','lint']);
