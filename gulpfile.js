let gulp = require('gulp'),
	scss = require('gulp-sass'),
	smap = require('gulp-sourcemaps'),
	prefix = require('autoprefixer'),
	lint = require('gulp-stylelint'),
	postcss = require('gulp-postcss'),
	sourcemaps = require('gulp-sourcemaps'),
	browserSync = require('browser-sync');


gulp.task('lint', () =>
	gulp.src('app/scss/**/*.scss')
	.pipe(lint({
		failAfterError: true,
		reporters: [{
			formatter: 'verbose',
			console: true
		}],
		debug: true
	}))
);

gulp.task('scss', () =>
	gulp
	.src('app/scss/style.scss')
	.pipe(sourcemaps.init())
	.pipe(scss().on('error', scss.logError))
	.pipe(postcss(
		[
			prefix({
				browsers: ['last 2 versions'],
				cascade: false
			})
		]
	))
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({
		stream: true
	}))
);

gulp.task('liveserver', () =>
	browserSync.init({
		server: {
			baseDir: "app"
		},
	})
);
gulp.task('watch', function() {
	gulp.watch('app/scss/**/*.scss', ['scss']);
	gulp.watch('app/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['scss', 'liveserver', 'watch']);