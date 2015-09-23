var gulp = require('gulp');
var browserify =require('gulp-browserify');
var concat = require('gulp-concat');
var stylus = require('gulp-stylus');

gulp.task('browserify',function(){
	gulp.src('src/js/main.js')
		.pipe(browserify({transform:'reactify'}))
		.pipe(concat('main.js'))
		.pipe(gulp.dest('dist/js'));
});

gulp.task('stylus',function(){
	gulp.src('src/css/style.styl')
		.pipe(stylus())
		.pipe(gulp.dest('dist/css'))

});

gulp.task('copy',function(){
	gulp.src('src/index.html')
		.pipe(gulp.dest('dist'))
});


gulp.task('default',['browserify','copy','stylus']);

gulp.task('watch', function () {
	gulp.watch('src/**/*.*',['default']);
});
