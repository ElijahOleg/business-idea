var gulp = require('gulp');
var run = require('gulp-run');
var browser = require('browser-sync');
var paths = {

}

	gulp.task('default', function(cb) {
		run('build-js', 'serve', 'watch', cb);
	});


gulp.task('watch', function(cb) {
	return watch(paths.filesrc, function() {
		gulp.start('refresh');
	});
});

gulp.task('build-js', function(cb) {
  
});
