var gulp = require('gulp'),
		compass = require('gulp-compass'),
		gutil = require('gulp-util'),

gulp.task('styles', function(){
	return gulp.src('./css/**/*.scss')
		.pipe(compass({
			css: './deploy/css',
			sass: './css',
			environment: 'development'
		}))
		.on('error', function(err){
			gutil.log(err.message);
			gutil.beep();
			this.emit('end');
		})
		.pipe(gulp.dest('./deploy/css'));
});

gulp.task('watch', ['scripts', 'styles'], function(){
	gulp.watch(['css/**/*.scss'], ['styles']);
});
