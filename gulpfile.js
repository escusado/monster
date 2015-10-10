var gulp        = require('gulp'),
    browserSync = require('browser-sync').create(),
    sass        = require('gulp-sass'),
    cleanDest   = require('gulp-clean-dest');

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

    gulp.watch('src/index.html', ['indexFile']).pipe(cleanDest('public/index.html'));
    gulp.watch('src/scss/**/*.scss', ['sass']).pipe(cleanDest('public/css/**/*.scss'));
    gulp.watch('src/js/**/*.js', ['js']).pipe(cleanDest('public/js/**/*.js'));
    gulp.watch(['public/index.html','public/js/*.js']).on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers

gulp.task('indexFile', function() {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('public/'));
});

gulp.task('js', function() {
    return gulp.src('src/js/**/*.js')
        .pipe(gulp.dest('public/js'));
});

gulp.task('sass', function() {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('public/css'))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
