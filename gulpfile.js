var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// Static Server + watching scss/html files
gulp.task('serve', ['sass', 'index', 'js'], function() {

    browserSync.init({
        server:{
          baseDir: './public/',
          routes: {
            '/node_modules': 'node_modules'
          }
        }
    });

    gulp.watch('src/scss/*.scss', ['sass']);
    gulp.watch('src/index.html', ['index']);
    gulp.watch('src/js/*.js', ['js']);
    gulp.watch(['public/index.html','public/js/*.js']).on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('index', function() {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('public/'));
});

gulp.task('js', function() {
    return gulp.src('src/js/*.js')
        .pipe(gulp.dest('public/js'));
});

gulp.task('sass', function() {
    return gulp.src('src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('public/css'))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
