var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var useref = require('gulp-useref');
var	gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-clean-css');

gulp.task('union',['html'], function(){
	return gulp.src('app/**/*.html')
		.pipe(concat('all.html'))
		.pipe(gulp.dest('dist/html/'));
});

gulp.task('html', function () {
    return gulp.src('app/**/*.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(gulp.dest('dist/'));
});

gulp.task('sass-compile', function(){
	return gulp.src('app/scss/**/*.scss')
	.pipe(sass()) 
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({
		stream: true
	}));
});

gulp.task('browserSync', function(){
	browserSync({
		server:{baseDir:'app'}
	})
});

gulp.task('watch', ['browserSync'], function (){
	gulp.watch('app/scss/**/*.scss', ['sass-compile']);
})