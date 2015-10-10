var gulp        = require('gulp'),
    browserSync = require('browser-sync').create(),
    sass        = require('gulp-sass'),
    clean       = require('gulp-clean');

// Static Server + watching scss/html files
gulp.task('serve', ['sass', 'indexFile', 'js'], function() {

    browserSync.init({
        server:{
          baseDir: './public/',
          routes: {
            '/node_modules': 'node_modules'
          }
        }
    });

    gulp.watch('src/scss/**/*.scss', ['sass']);
    gulp.watch('src/index.html', ['indexFile']);
    gulp.watch('src/js/**/*.js', ['js']);
    gulp.watch(['public/index.html','public/js/*.js']).on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers

gulp.task('indexFile', function() {
    return gulp.src('src/index.html')
        .pipe(clean())
        .pipe(gulp.dest('public/'));
});

gulp.task('js', function() {
    return gulp.src('src/js/**/*.js')
        .pipe(clean())
        .pipe(gulp.dest('public/js'));
});

gulp.task('sass', function() {
    return gulp.src('src/scss/**/*.scss')
        .pipe(clean())
        .pipe(sass())
        .pipe(gulp.dest('public/css'))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
